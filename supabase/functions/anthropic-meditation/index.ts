import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { desire } = await req.json();

    const anthropicKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `You are a spiritual guide operating in the tradition of Frederick L. Rawson and Biblical covenant law. A person is planting a faith seed and believing God for: "${desire}". Write a response in JSON with these fields: {"meditation":"A 150-word meditation on the spiritual reality of their desire already being fulfilled in Spirit, using Rawson's framework that the spiritual idea has not a single element of error. Reference one specific scripture (NKJV).","lawTitle":"Name of one specific Biblical law or principle that applies","law":"A 100-word explanation of how this law operates mechanically to produce the harvest they are believing for.","rephrasedDesire":"Their desire rephrased in the present tense as already received, in elegant language","multiplier":"hundredfold"} Return ONLY the JSON, no markdown.`,
          },
        ],
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
