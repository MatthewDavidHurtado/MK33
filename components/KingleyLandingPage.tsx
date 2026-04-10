import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const css = `
*,*::before,*::after{box-sizing:border-box}
:root{
  --bg:#0a0a0a;--bg2:#111;--bg3:#161616;
  --gold:#c9a84c;--gold-l:#e4cc7a;--gold-d:#a8872e;
  --cream:#f5f0e8;--cream-m:#d4cfc5;--dim:#6b665c;--muted:#a09a8e;
  --kserif:'Playfair Display',Georgia,serif;
  --kbody:'Libre Baskerville',Georgia,serif;
  --kaccent:'Cormorant Garamond',Georgia,serif;
}
.kl-root{background:var(--bg);color:var(--cream);font-family:var(--kbody);-webkit-font-smoothing:antialiased;min-height:100vh}
.kl-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 3rem;background:rgba(10,10,10,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,.15)}
.kl-nav-brand{font-family:var(--kaccent);font-size:1.3rem;font-weight:600;color:var(--cream);letter-spacing:.08em;text-decoration:none}
.kl-nav-links{display:flex;gap:2rem;align-items:center}
.kl-nav-link{font-family:var(--kaccent);font-size:.85rem;color:var(--muted);text-decoration:none;letter-spacing:.08em;transition:color .3s}
.kl-nav-link:hover{color:var(--cream)}
.kl-nav-cta{font-family:var(--kaccent);font-size:.82rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:.55rem 1.4rem;text-decoration:none;transition:all .3s;cursor:pointer;border:none}
.kl-nav-cta:hover{background:var(--gold-l)}
.kl-hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:8rem 2rem 5rem;position:relative;overflow:hidden}
.kl-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 20%,rgba(201,168,76,.06) 0%,transparent 70%),radial-gradient(ellipse 80% 50% at 50% 80%,rgba(201,168,76,.03) 0%,transparent 60%);pointer-events:none}
.kl-hero-pre{font-family:var(--kaccent);font-size:.78rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:2.5rem;opacity:0;animation:klFadeUp .8s ease .2s forwards}
.kl-hero-pre span{display:inline-block;border-top:1px solid var(--gold-d);border-bottom:1px solid var(--gold-d);padding:.5rem 0}
.kl-hero-h{font-family:var(--kserif);font-size:clamp(2.4rem,5.5vw,4.5rem);font-weight:900;line-height:1.1;color:var(--cream);max-width:900px;margin-bottom:1.8rem;opacity:0;animation:klFadeUp .8s ease .4s forwards}
.kl-hero-h em{color:var(--gold);font-style:italic}
.kl-hero-sub{font-family:var(--kbody);font-size:clamp(1rem,1.8vw,1.15rem);color:var(--muted);max-width:620px;line-height:1.8;margin-bottom:2.5rem;opacity:0;animation:klFadeUp .8s ease .6s forwards}
.kl-hero-cta-group{display:flex;flex-direction:column;align-items:center;gap:1rem;opacity:0;animation:klFadeUp .8s ease .8s forwards}
.kl-btn-primary{display:inline-block;font-family:var(--kaccent);font-size:1rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--bg);background:linear-gradient(135deg,var(--gold-l),var(--gold),var(--gold-d));padding:1.1rem 3.2rem;text-decoration:none;transition:all .35s;position:relative;overflow:hidden;border:none;cursor:pointer}
.kl-btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s}
.kl-btn-primary:hover::after{left:100%}
.kl-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,168,76,.3)}
.kl-hero-micro{font-family:var(--kaccent);font-size:.8rem;color:var(--dim);letter-spacing:.05em}
.kl-hero-bonus{display:inline-flex;align-items:center;gap:.6rem;margin-top:.5rem;font-family:var(--kaccent);font-size:.82rem;color:var(--gold-d);letter-spacing:.04em}
.kl-hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.5rem;color:var(--dim);font-family:var(--kaccent);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;opacity:0;animation:klFadeUp .8s ease 1.2s forwards}
.kl-hero-scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,var(--gold-d),transparent);animation:klScrollPulse 2s ease infinite}
.kl-pain{padding:6rem 2rem;max-width:780px;margin:0 auto}
.kl-section-label{font-family:var(--kaccent);font-size:.75rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:var(--gold-d);margin-bottom:2rem}
.kl-pain h2{font-family:var(--kserif);font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:700;color:var(--cream);line-height:1.3;margin-bottom:2rem}
.kl-pain p{font-size:1.05rem;color:var(--muted);margin-bottom:1.5rem;line-height:1.7}
.kl-highlight{color:var(--cream);font-weight:700}
.kl-symptom-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin:3rem 0;background:rgba(201,168,76,.1)}
.kl-symptom-item{background:var(--bg);padding:1.4rem 1.6rem;font-family:var(--kaccent);font-size:1.02rem;color:var(--cream-m);display:flex;align-items:center;gap:.8rem}
.kl-symptom-item::before{content:'—';color:var(--gold-d);font-weight:300}
.kl-framework{padding:6rem 2rem;background:var(--bg2);border-top:1px solid rgba(201,168,76,.1);border-bottom:1px solid rgba(201,168,76,.1)}
.kl-framework-inner{max-width:780px;margin:0 auto}
.kl-framework h2{font-family:var(--kserif);font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:700;color:var(--cream);line-height:1.3;margin-bottom:1.5rem}
.kl-framework p{font-size:1.05rem;color:var(--muted);margin-bottom:1.5rem;line-height:1.7}
.kl-concept-block{border-left:2px solid var(--gold-d);padding:1.5rem 2rem;margin:2rem 0;background:rgba(201,168,76,.03)}
.kl-concept-block h3{font-family:var(--kserif);font-size:1.2rem;color:var(--gold-l);margin-bottom:.8rem}
.kl-concept-block p{font-size:.95rem;color:var(--cream-m);margin-bottom:0}
.kl-results{padding:6rem 2rem;max-width:780px;margin:0 auto;text-align:center}
.kl-results h2{font-family:var(--kserif);font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:700;color:var(--cream);line-height:1.3;margin-bottom:2rem}
.kl-results-list{text-align:left;max-width:540px;margin:0 auto 3rem}
.kl-results-item{display:flex;align-items:baseline;gap:1rem;padding:.7rem 0;border-bottom:1px solid rgba(201,168,76,.08);font-size:1.02rem;color:var(--cream-m)}
.kl-strike{text-decoration:line-through;color:var(--dim)}
.kl-resolved{color:var(--gold);font-weight:700;font-size:.9rem;letter-spacing:.05em}
.kl-checkmark{color:var(--gold);flex-shrink:0}
.kl-webinar-cta{padding:6rem 2rem;background:var(--bg2);border-top:1px solid rgba(201,168,76,.1);text-align:center}
.kl-webinar-cta-inner{max-width:700px;margin:0 auto}
.kl-webinar-cta h2{font-family:var(--kserif);font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:var(--cream);line-height:1.2;margin-bottom:1.5rem}
.kl-webinar-cta h2 em{color:var(--gold);font-style:italic}
.kl-webinar-cta p{font-size:1.05rem;color:var(--muted);margin-bottom:1.5rem;line-height:1.7}
.kl-webinar-cta-box{margin:3rem auto;padding:3rem 2.5rem;background:rgba(201,168,76,.03);border:1px solid rgba(201,168,76,.12);max-width:560px}
.kl-webinar-cta-box h3{font-family:var(--kserif);font-size:1.5rem;font-weight:700;color:var(--cream);margin-bottom:1.2rem}
.kl-wc-feature{display:flex;gap:.8rem;padding:.7rem 0;text-align:left}
.kl-wc-feature-icon{color:var(--gold);font-size:1rem;flex-shrink:0;margin-top:.15rem}
.kl-wc-feature-text{font-family:var(--kaccent);font-size:.95rem;color:var(--cream-m);line-height:1.5}
.kl-wc-feature-text strong{color:var(--cream)}
.kl-micro{display:block;margin-top:1rem;font-family:var(--kaccent);font-size:.78rem;color:var(--dim)}
.kl-book-badge{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.2rem;padding:.6rem 1.2rem;border:1px solid rgba(201,168,76,.2);background:rgba(201,168,76,.04);font-family:var(--kaccent);font-size:.82rem;color:var(--gold)}
.kl-close-section{padding:5rem 2rem 4rem;text-align:center;max-width:650px;margin:0 auto}
.kl-close-section blockquote{font-family:var(--kserif);font-size:clamp(1.2rem,2.5vw,1.6rem);font-style:italic;color:var(--cream);line-height:1.5;margin-bottom:1.5rem;position:relative;padding:0 1rem}
.kl-close-section blockquote::before{content:'"';font-size:3.5rem;color:var(--gold-d);position:absolute;top:-1.2rem;left:-.5rem;font-family:var(--kserif);line-height:1}
.kl-close-attr{font-family:var(--kaccent);font-size:.82rem;color:var(--gold-d);letter-spacing:.1em;margin-bottom:2rem}
.kl-close-tagline{font-family:var(--kaccent);font-size:.88rem;color:var(--dim);letter-spacing:.08em}
.kl-footer{padding:3rem 2rem;text-align:center;border-top:1px solid rgba(201,168,76,.08)}
.kl-footer p{font-family:var(--kaccent);font-size:.72rem;color:var(--dim);letter-spacing:.1em}
.kl-footer-mt{margin-top:.5rem}
@keyframes klFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes klScrollPulse{0%,100%{opacity:.3}50%{opacity:.8}}
@media(max-width:768px){
  .kl-nav{padding:1rem 1.5rem}
  .kl-nav-links{gap:1rem}
  .kl-nav-link{display:none}
  .kl-hero{padding:7rem 1.5rem 4rem}
  .kl-symptom-grid{grid-template-columns:1fr}
  .kl-hero-scroll{display:none}
  .kl-btn-primary{padding:1rem 2.4rem;font-size:.9rem}
}
`;

const KingleyLandingPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    return (
        <div className="kl-root">
            <style>{css}</style>

            <nav className="kl-nav">
                <a href="#" className="kl-nav-brand">Kingley Foundation</a>
                <div className="kl-nav-links">
                    <a href="#framework" className="kl-nav-link">The Framework</a>
                    <a href="#results" className="kl-nav-link">Results</a>
                    <button onClick={() => navigate('/watch')} className="kl-nav-cta">Watch Free Training</button>
                </div>
            </nav>

            <section className="kl-hero">
                <div className="kl-hero-pre"><span>Your doctor found nothing. Your body disagrees.</span></div>
                <h1 className="kl-hero-h">"Everything Came Back <em>Normal.</em>"</h1>
                <p className="kl-hero-sub">I had 11 unexplained conditions. Every test was clear. Every specialist shrugged. Then I found the one thing they never thought to look for — and eliminated every symptom. Not managed. <strong style={{color:'var(--cream)'}}>Eliminated.</strong></p>
                <div className="kl-hero-cta-group">
                    <button onClick={() => navigate('/watch')} className="kl-btn-primary">Watch the Free Training</button>
                    <span className="kl-hero-micro">30-minute training + free 15-minute session with Malcolm</span>
                    <span className="kl-hero-bonus"><span>📖</span> Instant free download of the book included</span>
                </div>
                <div className="kl-hero-scroll">
                    <div className="kl-hero-scroll-line"></div>
                    Scroll
                </div>
            </section>

            <section className="kl-pain">
                <div className="kl-section-label">If this is your life, keep reading</div>
                <h2>You've been to the doctor. You've done the bloodwork. The MRIs. The specialists. And they said the same thing every time.</h2>
                <p>"We can't find anything wrong. Try to manage your stress."</p>
                <p>But the symptoms didn't get the memo. They're still here. Every morning. Every night. And the worst part isn't the pain, the fatigue, or the fog — it's the feeling that <span className="kl-highlight">no one believes you.</span></p>
                <div className="kl-symptom-grid">
                    {[
                        'Chronic fatigue no amount of rest can touch',
                        'Numbness or tingling with no structural cause',
                        'Panic attacks that come out of nowhere',
                        'Brain fog and inability to concentrate',
                        'IBS, bloating, or unexplained stomach issues',
                        'Body twitching or involuntary movements',
                        'Anxiety so severe it becomes agoraphobia',
                        'Widespread pain with no diagnosis',
                        'Insomnia despite total exhaustion',
                        '"Chronic Lyme" that antibiotics didn\'t finish',
                    ].map((s, i) => <div key={i} className="kl-symptom-item">{s}</div>)}
                </div>
                <p>You're not crazy. You're not a hypochondriac. Your symptoms are real. They have a cause. And it's somewhere your doctor was never trained to look.</p>
            </section>

            <section className="kl-framework" id="framework">
                <div className="kl-framework-inner">
                    <div className="kl-section-label">What they missed</div>
                    <h2>Every symptom you carry is a biological program — purposeful, specific, and traceable to an exact moment in your life.</h2>
                    <p>Not "stress." Not "psychosomatic." A precise program your body is running in response to an unresolved emotional conflict. Find the conflict. Correct the thinking that created it. And the program shuts down.</p>
                    <div className="kl-concept-block">
                        <h3>The Off Note</h3>
                        <p>Every conflict is sustained by a thinking error — a false belief installed at the moment of shock. "I'm not safe." "I'm not enough." "I've been violated." Correct the thought with precise understanding, and the biological program it was driving loses its foundation. The symptom resolves.</p>
                    </div>
                    <div className="kl-concept-block">
                        <h3>The Tracks</h3>
                        <p>Your brain recorded everything in the environment when the original shock occurred. Now, anything that rhymes with that moment reactivates the same program. This is why your symptoms "come from nowhere." They don't. Something in your environment just matched an old recording.</p>
                    </div>
                    <div className="kl-concept-block">
                        <h3>The Two Phases</h3>
                        <p>You feel worst when life gets better — because your body switches into repair mode the moment the conflict resolves. The fatigue, the inflammation, the flare-ups after a crisis passes? That's healing. And it looks exactly like disease to a doctor who doesn't know the model.</p>
                    </div>
                </div>
            </section>

            <section className="kl-results" id="results">
                <div className="kl-section-label">My story. My proof.</div>
                <h2>I carried 11 conditions. I eliminated every one.</h2>
                <div className="kl-results-list">
                    {[
                        'Chronic Fatigue',
                        'Right Foot/Leg Numbness',
                        'Body Twitching',
                        'Panic Attacks',
                        'Agoraphobia',
                        'OCD',
                        'Bulimia (24 years)',
                        'Depression',
                        'High Blood Pressure',
                        'Chronic Lyme Symptoms',
                        'cPTSD',
                    ].map((item, i) => (
                        <div key={i} className="kl-results-item">
                            <span className="kl-checkmark">✓</span>
                            <span className="kl-strike">{item}</span>
                            &nbsp;&nbsp;<span className="kl-resolved">Resolved</span>
                        </div>
                    ))}
                </div>
                <p style={{color:'var(--muted)',maxWidth:'540px',margin:'0 auto'}}>Not through a better doctor. Not through a better drug. Through understanding what my body was actually doing — and correcting the thinking that was driving it.</p>
            </section>

            <section className="kl-webinar-cta" id="watch">
                <div className="kl-webinar-cta-inner">
                    <div className="kl-section-label">Free training</div>
                    <h2>Watch the Training.<br/>Get the Book.<br/>Book Your <em>Free</em> Session.</h2>
                    <p>A 30-minute training where I walk you through the complete framework — the same framework that resolved every one of my conditions. Then book a free 15-minute session where I map your symptoms personally.</p>
                    <div className="kl-webinar-cta-box">
                        <h3>Here's what you get — all free:</h3>
                        <div className="kl-wc-feature">
                            <div className="kl-wc-feature-icon">◆</div>
                            <div className="kl-wc-feature-text"><strong>The 30-minute training</strong> — the complete framework, my story, and exactly how the resolution works</div>
                        </div>
                        <div className="kl-wc-feature">
                            <div className="kl-wc-feature-icon">◆</div>
                            <div className="kl-wc-feature-text"><strong>The book — instant download</strong> — "Everything Came Back Normal" in full, yours to read immediately while you wait for your session</div>
                        </div>
                        <div className="kl-wc-feature">
                            <div className="kl-wc-feature-icon">◆</div>
                            <div className="kl-wc-feature-text"><strong>A free 15-minute session with Malcolm</strong> — your symptoms mapped to the framework, one-on-one, zero cost</div>
                        </div>
                        <button onClick={() => navigate('/watch')} className="kl-btn-primary" style={{marginTop:'1.8rem',display:'inline-block'}}>Get Instant Access</button>
                        <span className="kl-micro">No credit card. No obligation. Book download is immediate.</span>
                        <div className="kl-book-badge">
                            <span>📖</span>
                            Free book download included with registration
                        </div>
                    </div>
                </div>
            </section>

            <section className="kl-close-section">
                <blockquote>You've spent years being told everything came back normal. It's time to find out what's actually going on.</blockquote>
                <div className="kl-close-attr">— Malcolm Kingley, Kingley Foundation</div>
                <div className="kl-close-tagline">Find the off note. Correct the thought. Watch the body follow.</div>
            </section>

            <footer className="kl-footer">
                <p>Kingley Foundation — 508(c)(1)(A) — State of Washington</p>
                <p className="kl-footer-mt">© Malcolm Kingley. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default KingleyLandingPage;
