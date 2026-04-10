
const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gemini-proxy`;

const parseSSEStream = async function* (response: Response): AsyncGenerator<string> {
  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const data = line.slice(6).trim();
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield text;
        } catch {
          // skip malformed chunks
        }
      }
    }
  }
};

export const generateTreatmentStream = async (userQuestion: string) => {
  const response = await fetch(EDGE_FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ type: "treatment", userQuestion }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate spiritual treatment. Please check your connection and API configuration.");
  }

  return parseSSEStream(response);
};

export const generateGnmAnalysisStream = async (symptoms: string, handedness: "Right" | "Left") => {
  const response = await fetch(EDGE_FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ type: "gnm", symptoms, handedness }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate biological analysis. Please check your connection and API configuration.");
  }

  return parseSSEStream(response);
};
