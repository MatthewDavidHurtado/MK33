import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

// ── Global styles (fonts, colors, animations) ──
const GS = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
:root{--bg:#0a0a0a;--bg2:#111;--gold:#c9a84c;--gold-l:#e4cc7a;--gold-d:#a8872e;--cream:#f5f0e8;--cream-m:#d4cfc5;--dim:#7a756b;--muted:#b0aa9e;--serif:'Playfair Display',Georgia,serif;--body:'Libre Baskerville',Georgia,serif;--accent:'Cormorant Garamond',Georgia,serif}
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{background:var(--bg);color:var(--cream);font-family:var(--body);-webkit-font-smoothing:antialiased;font-size:20px}::selection{background:rgba(201,168,76,.3);color:var(--cream)}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fade-in{opacity:0;animation:fadeUp .7s ease forwards}.d1{animation-delay:.2s}.d2{animation-delay:.4s}.d3{animation-delay:.6s}.d4{animation-delay:.8s}@keyframes spin{to{transform:rotate(360deg)}}
`}</style>
);

// ── UI atoms ──
const Btn = ({ children, onClick, large, href }: { children: React.ReactNode; onClick?: () => void; large?: boolean; href?: string }) => {
  const s: React.CSSProperties = {
    fontFamily: "var(--accent)", fontSize: large ? "1.25rem" : "1.1rem", fontWeight: 600,
    letterSpacing: ".16em", textTransform: "uppercase", color: "var(--bg)",
    background: "linear-gradient(135deg,var(--gold-l),var(--gold),var(--gold-d))",
    padding: large ? "1.15rem 3.2rem" : ".75rem 1.8rem", border: "none", cursor: "pointer",
    transition: "all .35s", display: "inline-block", textDecoration: "none",
  };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={s}>{children}</a>
    : <button onClick={onClick} style={s}>{children}</button>;
};

const Hd = ({ children, sz = "clamp(1.8rem,3.5vw,2.6rem)" }: { children: React.ReactNode; sz?: string }) => (
  <h2 style={{ fontFamily: "var(--serif)", fontSize: sz, fontWeight: 700, color: "var(--cream)", lineHeight: 1.3, marginBottom: "1.5rem" }}>{children}</h2>
);

const Bd = ({ children, c }: { children: React.ReactNode; c?: boolean }) => (
  <p style={{ fontSize: "1.35rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.75, textAlign: c ? "center" : "left" }}>{children}</p>
);

// ── Payment & crypto addresses ──
const PAY = {
  PAYPAL: "https://www.paypal.com/donate/?hosted_button_id=REL4NASVXB7N8",
  STRIPE: "https://buy.stripe.com/fZu4gyfLodtubUBfxt1Nu0s",
  CASHAPP: "https://cash.app/$MinisterofAllowing",
};
const CRYPTO = {
  BTC: "bc1qmp9nlcz8v08daw5pkyxw9m4sv9ngpcay5ez9vm",
  XRP: "rpTyKsuDFi3fwirZbtE2hx2pGZujdjCvvD",
  ETH: "0x01471a6d0AF741A87172961c599a06bA2f0fDB09",
};

// ── Crypto address row with copy button ──
const CryptoRow = ({ label, addr }: { label: string; addr: string }) => {
  const [cp, setCp] = useState(false);
  return (
    <div style={{ padding: "1.2rem 1.5rem", background: "rgba(201,168,76,.03)", border: "1px solid rgba(201,168,76,.08)", marginBottom: ".8rem" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--cream)", marginBottom: ".6rem" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: ".8rem", background: "var(--bg)", padding: ".8rem 1rem", border: "1px solid rgba(201,168,76,.06)" }}>
        <span style={{ fontFamily: "monospace", fontSize: ".85rem", color: "var(--muted)", wordBreak: "break-all", flex: 1 }}>{addr}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(addr); setCp(true); setTimeout(() => setCp(false), 2000); }}
          style={{ fontFamily: "var(--accent)", fontSize: ".9rem", color: cp ? "#4ade80" : "var(--gold-d)", background: "none", border: "1px solid rgba(201,168,76,.15)", padding: ".4rem .8rem", cursor: "pointer" }}
        >{cp ? "Copied" : "Copy"}</button>
      </div>
    </div>
  );
};

// ── Main GIVE page (multi-screen flow) ──
export default function GivePage() {
  const [screen, setScreen] = useState("welcome");
  const [desire, setDesire] = useState("");
  const [med, setMed] = useState<{ meditation: string; lawTitle: string; law: string; rephrasedDesire: string; multiplier: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const generateMed = async () => {
    setLoading(true);
    try {
      const gemini = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      const prompt = `You are a spiritual guide operating in the tradition of Frederick L. Rawson and Biblical covenant law. A person is planting a faith seed and believing God for: "${desire}". Write a response in JSON with these fields: {"meditation":"A 150-word meditation on the spiritual reality of their desire already being fulfilled in Spirit, using Rawson's framework that the spiritual idea has not a single element of error. Reference one specific scripture (NKJV).","lawTitle":"Name of one specific Biblical law or principle that applies","law":"A 100-word explanation of how this law operates mechanically to produce the harvest they are believing for.","rephrasedDesire":"Their desire rephrased in the present tense as already received, in elegant language","multiplier":"hundredfold"} Return ONLY the JSON, no markdown.`;
      const result = await gemini.models.generateContent({ model: "gemini-2.5-flash", contents: [{ role: "user", parts: [{ text: prompt }] }] });
      const t = result.text || "";
      const clean = t.replace(/```json|```/g, "").trim();
      setMed(JSON.parse(clean));
      setScreen("meditation");
    } catch (e) {
      console.error(e);
      setMed({
        meditation: "The spiritual reality of your desire is already complete in the Mind of God. What you are believing for has never been absent — it has been waiting for the vessel of your faith to receive it. 'Before they call, I will answer; and while they are still speaking, I will hear.' (Isaiah 65:24 NKJV). The material appearance of lack is the counterfeit. The spiritual fact is wholeness. Rest in this knowing.",
        lawTitle: "The Law of Sowing and Reaping",
        law: "'He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully.' (2 Corinthians 9:6). This is mechanical law — as reliable as gravity. The seed you plant in faith, with cheerfulness, enters the Covenant's operating system and returns multiplied.",
        rephrasedDesire: desire,
        multiplier: "hundredfold",
      });
      setScreen("meditation");
    } finally {
      setLoading(false);
    }
  };

  // WELCOME
  if (screen === "welcome") return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "7rem 1.5rem 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }} className="fade-in d1">
          <p style={{ fontFamily: "var(--accent)", fontSize: ".85rem", letterSpacing: ".25em", color: "var(--gold-d)", textTransform: "uppercase", marginBottom: "1.2rem" }}>Escape the Collapse. Enter the Covenant.</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 700, color: "var(--cream)", lineHeight: 1.2, marginBottom: ".5rem" }}>The Biblical Laws of Financial Increase: How I Went From Bankrupt and Bedridden to Seven Figures</h1>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 700, fontStyle: "italic", color: "var(--gold)", marginBottom: "1.5rem" }}>— Three Times</h2>
          <div style={{ width: 60, height: 2, background: "var(--gold-d)", margin: "0 auto 1.8rem" }} />
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,1.8vw,1.2rem)", color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto 1.5rem" }}>Inflation is rising. Jobs are disappearing. AI is replacing you. The economy is crumbling. And every solution you've tried has failed. There is one contract that has never defaulted in 4,000 years — and you've never read the terms.</p>
          <p style={{ fontFamily: "var(--accent)", fontSize: ".85rem", letterSpacing: ".2em", color: "var(--gold-d)", textTransform: "uppercase" }}>Watch the video, scroll down - get the book.</p>
        </div>
        <div className="fade-in d2" style={{ border: "1px solid rgba(201,168,76,.15)", background: "#000", marginBottom: "1.5rem", position: "relative", width: "100%", paddingBottom: "56.25%" }}>
          <iframe src="https://player.vimeo.com/video/1182063073?h=bb3494c4ef&badge=0&autopause=0" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Btn large onClick={() => setScreen("payment")}>Give Now</Btn>
          <p style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", marginTop: ".8rem" }}>PayPal · Stripe · CashApp · BTC · ETH · XRP</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <button
            onClick={() => setScreen("harvest")}
            style={{ fontFamily: "var(--accent)", fontSize: "1.1rem", color: "var(--gold-d)", background: "none", border: "2px solid var(--gold-d)", padding: ".9rem 2.5rem", cursor: "pointer", letterSpacing: ".1em", transition: "all .3s" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = "var(--gold-d)"; (e.target as HTMLElement).style.color = "var(--bg)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = "none"; (e.target as HTMLElement).style.color = "var(--gold-d)"; }}
          >Prepare My Heart to Receive My Good</button>
        </div>
        <div style={{ padding: "2rem", background: "rgba(201,168,76,.03)", border: "1px solid rgba(201,168,76,.08)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontStyle: "italic", color: "var(--cream-m)", lineHeight: 1.6 }}>"Bring all the tithes into the storehouse, that there may be food in My house, and try Me now in this," says the LORD of hosts, "If I will not open for you the windows of heaven and pour out for you such blessing that there will not be room enough to receive it."</p>
          <p style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--gold-d)", textAlign: "right", marginTop: "1rem" }}>— Malachi 3:10 NKJV</p>
        </div>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <img src="https://i.imgur.com/vRXKhjW.jpg" alt="Covenant Frequency" style={{ width: "100%", maxWidth: 260, border: "1px solid rgba(201,168,76,.12)", marginBottom: "1.5rem" }} />
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 700, color: "var(--cream)", marginBottom: ".6rem" }}>Free Gift: The Covenant Frequency</h3>
          <p style={{ fontFamily: "var(--accent)", fontSize: "1.05rem", color: "var(--muted)", marginBottom: "1.2rem" }}>The sovereign's manual for activating the ancient laws.</p>
          <Btn href="https://drive.google.com/file/d/1BTl3Wlp3EPrB-hoOjXK1Ollt0yNCCaYs/view?usp=sharing">Download Free</Btn>
        </div>
      </div>
    </div>
  );

  // HARVEST
  if (screen === "harvest") return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "7rem 1.5rem 3rem", textAlign: "center" }} className="fade-in d1">
        <Hd>Declare Your Harvest</Hd>
        <Bd c>What are you using your faith to believe God for? Be specific. Write it down and make it plain.</Bd>
        <textarea
          value={desire}
          onChange={e => setDesire(e.target.value)}
          placeholder="e.g., 'Perfect health in my body,' 'Financial abundance to clear all debts,' 'Wisdom to lead my family'..."
          style={{ width: "100%", minHeight: 160, padding: "1.2rem", background: "var(--bg)", border: "1px solid rgba(201,168,76,.15)", color: "var(--cream)", fontFamily: "var(--accent)", fontSize: "1.1rem", outline: "none", resize: "vertical", lineHeight: 1.6, marginBottom: "1.5rem" }}
        />
        <Btn large onClick={generateMed}>Submit</Btn>
        <div style={{ marginTop: "1.5rem" }}>
          <button onClick={() => setScreen("welcome")} style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
        </div>
      </div>
    </div>
  );

  // LOADING
  if (loading) return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "12rem 1.5rem", textAlign: "center" }}>
        <div style={{ width: 50, height: 50, border: "3px solid rgba(201,168,76,.2)", borderTop: "3px solid var(--gold)", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 1.5rem" }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <p style={{ fontFamily: "var(--accent)", fontSize: "1.15rem", color: "var(--muted)" }}>Preparing your meditation...</p>
      </div>
    </div>
  );

  // MEDITATION
  if (screen === "meditation" && med) return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "7rem 1.5rem 3rem" }} className="fade-in d1">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}><Hd>A Word of Gnosis</Hd></div>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--gold-l)", marginBottom: "1rem", borderBottom: "1px solid rgba(201,168,76,.1)", paddingBottom: ".8rem" }}>Meditation on Reality</h3>
          <p style={{ fontSize: "1.15rem", color: "var(--cream-m)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{med.meditation}</p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--gold-l)", marginBottom: "1rem", borderBottom: "1px solid rgba(201,168,76,.1)", paddingBottom: ".8rem" }}>{med.lawTitle}</h3>
          <p style={{ fontSize: "1.15rem", color: "var(--cream-m)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{med.law}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Btn large onClick={() => setScreen("declaration")}>Prepare My Declaration</Btn>
          <div style={{ marginTop: "1rem" }}>
            <button onClick={() => setScreen("payment")} style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", background: "none", border: "none", cursor: "pointer" }}>Skip to giving →</button>
          </div>
          <div style={{ marginTop: ".5rem" }}>
            <button onClick={() => setScreen("harvest")} style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
          </div>
        </div>
      </div>
    </div>
  );

  // DECLARATION
  if (screen === "declaration" && med) return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "7rem 1.5rem 3rem", textAlign: "center" }} className="fade-in d1">
        <Hd>Speak Your Faith</Hd>
        <Bd c>Read this declaration aloud. Let the words resonate from your spirit.</Bd>
        <div style={{ padding: "2.5rem", background: "rgba(201,168,76,.03)", border: "1px solid rgba(201,168,76,.12)", textAlign: "left", marginBottom: "2rem" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontStyle: "italic", color: "var(--cream)", lineHeight: 1.7 }}>
            "I believe that I have already received <strong style={{ color: "var(--gold)", fontStyle: "normal" }}>{med.rephrasedDesire}</strong>. Out of the overflow of abundance in Me, I plant this seed with faith and birth supernatural expectation within. I am resting on Divine Law now. I release this money freely and God returns it to me exceedingly — multiplied a <strong style={{ color: "var(--gold)", fontStyle: "normal" }}>{med.multiplier}</strong>, in Jesus Christ's name. It is done."
          </p>
        </div>
        <Bd c>Your heart is now ready to sow your faith-seed.</Bd>
        <Btn large onClick={() => setScreen("payment")}>Proceed to Give</Btn>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setScreen("meditation")} style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
        </div>
      </div>
    </div>
  );

  // PAYMENT
  if (screen === "payment") return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <GS />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "7rem 1.5rem 3rem" }} className="fade-in d1">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Hd>Choose Your Method</Hd>
          <p style={{ fontFamily: "var(--accent)", fontSize: "1.1rem", color: "var(--muted)", fontStyle: "italic" }}>"You Can't Outgive God."</p>
        </div>

        <div style={{ marginBottom: "2.5rem", border: "1px solid rgba(201,168,76,.22)", boxShadow: "0 4px 48px rgba(201,168,76,.07)", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg,rgba(201,168,76,.13),rgba(201,168,76,.04))", padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: ".75rem", borderBottom: "1px solid rgba(201,168,76,.15)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--accent)", fontSize: ".82rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-d)" }}>Secure Giving — Card, Apple Pay, Google Pay &amp; More</span>
          </div>
          <div style={{ position: "relative", overflow: "hidden", height: 480, width: "100%", background: "#fff" }}>
            <iframe title="Donation form powered by Zeffy" style={{ position: "absolute", border: 0, top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.zeffy.com/embed/donation-form/first-fruits-tithes-faith-seeds-alms" allow="payment" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,.1)" }} />
          <span style={{ fontFamily: "var(--accent)", fontSize: ".78rem", letterSpacing: ".2em", color: "var(--dim)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Or give via</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,.1)" }} />
        </div>

        {([["PayPal", PAY.PAYPAL], ["Stripe — Credit/Debit, Klarna", PAY.STRIPE], ["Cash App", PAY.CASHAPP]] as [string, string][]).map(([l, u]) => (
          <a key={l} href={u} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", padding: "1.2rem 1.5rem", background: "rgba(201,168,76,.03)", border: "1px solid rgba(201,168,76,.08)", marginBottom: ".8rem", textDecoration: "none", transition: "background .3s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,.08)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,.03)"}
          >
            <span style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700, color: "var(--cream)" }}>{l}</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--gold-d)" }}>→</span>
          </a>
        ))}

        <div style={{ borderTop: "1px solid rgba(201,168,76,.1)", margin: "1.5rem 0", paddingTop: "1.5rem" }}>
          <p style={{ fontFamily: "var(--accent)", fontSize: "1rem", fontWeight: 600, color: "var(--gold-d)", letterSpacing: ".15em", marginBottom: "1rem" }}>CRYPTOCURRENCY</p>
          <CryptoRow label="Bitcoin (BTC)" addr={CRYPTO.BTC} />
          <CryptoRow label="Ethereum (ETH) & Stablecoins" addr={CRYPTO.ETH} />
          <CryptoRow label="XRP" addr={CRYPTO.XRP} />
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button onClick={() => setScreen("welcome")} style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--dim)", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
        </div>

        <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "var(--bg2)", border: "1px solid rgba(201,168,76,.06)" }}>
          <details>
            <summary style={{ fontFamily: "var(--accent)", fontSize: "1rem", color: "var(--cream-m)", cursor: "pointer" }}>Important Disclaimers</summary>
            <div style={{ marginTop: "1rem", fontFamily: "var(--accent)", fontSize: ".95rem", color: "var(--dim)", lineHeight: 1.6 }}>
              <p style={{ marginBottom: ".8rem" }}>All materials presented on MalcolmKingley.Org are offered for spiritual exploration by the Kingley Foundation, a 508(c)(1)(a) organization. Nothing herein constitutes medical, legal, financial, or professional advice.</p>
              <p style={{ marginBottom: ".8rem" }}>Participation is voluntary. Donations are gifts of support to our private spiritual ministry. They do not constitute purchase of services nor create any guarantee of outcome.</p>
              <p>By engaging with this site or making a donation, you acknowledge that all content exists within the realm of spiritual belief and you accept full responsibility for your own choices.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );

  return null;
}
