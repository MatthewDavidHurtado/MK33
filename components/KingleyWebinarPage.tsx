import React, { useEffect, useRef, useState } from 'react';

const css = `
.kw-root{background:#0a0a0a;color:#f5f0e8;font-family:'Libre Baskerville',Georgia,serif;-webkit-font-smoothing:antialiased;min-height:100vh;overflow-x:hidden}
.kw-root *{box-sizing:border-box}
.kw-topbar{display:flex;justify-content:center;align-items:center;padding:1.2rem 2rem;border-bottom:1px solid rgba(201,168,76,.1)}
.kw-topbar-brand{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-weight:600;color:#d4cfc5;letter-spacing:.1em;text-decoration:none}
.kw-page{max-width:960px;margin:0 auto;padding:2.5rem 1.5rem 2rem}
.kw-urgency{text-align:center;margin-bottom:1.8rem;opacity:0;animation:kwFade .6s ease .2s forwards}
.kw-urgency-badge{display:inline-block;font-family:'Cormorant Garamond',Georgia,serif;font-size:.72rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:#c9a84c;border:1px solid rgba(201,168,76,.25);padding:.45rem 1.4rem;background:rgba(201,168,76,.04)}
.kw-pre-video{text-align:center;margin-bottom:2rem;opacity:0;animation:kwFade .6s ease .35s forwards}
.kw-pre-video h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.4rem,3.2vw,2rem);font-weight:700;line-height:1.25;color:#f5f0e8;margin-bottom:.8rem}
.kw-pre-video h1 em{color:#c9a84c;font-style:italic}
.kw-pre-video p{font-family:'Cormorant Garamond',Georgia,serif;font-size:.95rem;color:#a09a8e;max-width:560px;margin:0 auto;line-height:1.6}
.kw-video-wrapper{position:relative;width:100%;border:1px solid rgba(201,168,76,.15);background:#000;opacity:0;animation:kwFade .6s ease .5s forwards}
.kw-video-aspect{position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden}
.kw-video-aspect iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}
.kw-book-bar{display:flex;align-items:center;justify-content:center;gap:1.5rem;padding:1.5rem 2rem;background:#111;border:1px solid rgba(201,168,76,.12);border-top:2px solid #a8872e;margin-bottom:.5rem;opacity:0;animation:kwFade .6s ease .65s forwards;flex-wrap:wrap}
.kw-book-bar-icon{font-size:2.2rem;flex-shrink:0}
.kw-book-bar-text{text-align:left}
.kw-book-bar-title{font-family:'Playfair Display',Georgia,serif;font-size:1rem;font-weight:700;color:#f5f0e8;margin-bottom:.2rem}
.kw-book-bar-sub{font-family:'Cormorant Garamond',Georgia,serif;font-size:.82rem;color:#a09a8e;line-height:1.4}
.kw-btn-download{display:inline-block;font-family:'Cormorant Garamond',Georgia,serif;font-size:.82rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#0a0a0a;background:#c9a84c;padding:.7rem 1.8rem;text-decoration:none;transition:all .3s;flex-shrink:0}
.kw-btn-download:hover{background:#e4cc7a}
.kw-cta-bar{background:#111;border:1px solid rgba(201,168,76,.12);border-top:none;padding:2.5rem 2rem;text-align:center;margin-bottom:2.5rem;opacity:0;animation:kwFade .6s ease .8s forwards}
.kw-cta-bar h2{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.3rem,2.8vw,1.8rem);font-weight:700;color:#f5f0e8;margin-bottom:.6rem;line-height:1.3}
.kw-cta-bar h2 em{color:#c9a84c;font-style:italic}
.kw-cta-bar .kw-sub{font-family:'Cormorant Garamond',Georgia,serif;font-size:.92rem;color:#a09a8e;margin-bottom:1.5rem}
.kw-btn-book{display:inline-block;font-family:'Cormorant Garamond',Georgia,serif;font-size:1rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#0a0a0a;background:linear-gradient(135deg,#e4cc7a,#c9a84c,#a8872e);padding:1.1rem 3.5rem;text-decoration:none;transition:all .35s;position:relative;overflow:hidden;border:none;cursor:pointer}
.kw-btn-book::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s}
.kw-btn-book:hover::after{left:100%}
.kw-btn-book:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,168,76,.3)}
.kw-cta-micro{display:block;margin-top:1rem;font-family:'Cormorant Garamond',Georgia,serif;font-size:.75rem;color:#6b665c}
.kw-steps{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:rgba(201,168,76,.06);margin-bottom:2.5rem;opacity:0;animation:kwFade .6s ease .95s forwards}
.kw-step{background:#0a0a0a;padding:2rem 1.5rem;text-align:center}
.kw-step-num{font-family:'Cormorant Garamond',Georgia,serif;font-size:2rem;font-weight:300;color:#a8872e;margin-bottom:.5rem}
.kw-step-title{font-family:'Playfair Display',Georgia,serif;font-size:.9rem;font-weight:700;color:#f5f0e8;margin-bottom:.4rem}
.kw-step-text{font-family:'Cormorant Garamond',Georgia,serif;font-size:.78rem;color:#6b665c;line-height:1.5}
.kw-book-preview{padding:3rem 2rem;background:#111;border:1px solid rgba(201,168,76,.08);margin-bottom:2.5rem;display:flex;gap:2.5rem;align-items:center;opacity:0;animation:kwFade .6s ease 1.1s forwards;flex-wrap:wrap}
.kw-book-preview-content{flex:1;min-width:280px}
.kw-book-preview-label{font-family:'Cormorant Garamond',Georgia,serif;font-size:.72rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:#a8872e;margin-bottom:1rem}
.kw-book-preview h3{font-family:'Playfair Display',Georgia,serif;font-size:1.4rem;font-weight:700;color:#f5f0e8;margin-bottom:.8rem;line-height:1.3}
.kw-book-preview h3 em{color:#c9a84c;font-style:italic}
.kw-book-preview p{font-family:'Cormorant Garamond',Georgia,serif;font-size:.88rem;color:#a09a8e;line-height:1.6;margin-bottom:1rem}
.kw-chapters{font-family:'Cormorant Garamond',Georgia,serif;font-size:.78rem;color:#6b665c;line-height:1.8;margin-bottom:1.5rem}
.kw-book-mock{flex-shrink:0;width:180px;height:260px;background:linear-gradient(145deg,#1a1a1a,#0d0d0d);border:1px solid rgba(201,168,76,.15);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:1.5rem;position:relative;box-shadow:8px 8px 30px rgba(0,0,0,.5)}
.kw-book-mock::before{content:'';position:absolute;left:0;top:8%;bottom:8%;width:3px;background:linear-gradient(to bottom,#a8872e,#c9a84c,#a8872e);opacity:.6}
.kw-book-mock-title{font-family:'Playfair Display',Georgia,serif;font-size:.85rem;font-weight:900;color:#f5f0e8;line-height:1.2;margin-bottom:.6rem}
.kw-book-mock-title em{color:#c9a84c;font-style:italic}
.kw-book-mock-author{font-family:'Cormorant Garamond',Georgia,serif;font-size:.6rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#6b665c}
.kw-closing{text-align:center;padding:2rem 1rem 3rem;opacity:0;animation:kwFade .6s ease 1.3s forwards}
.kw-closing-quote{font-family:'Playfair Display',Georgia,serif;font-size:1.1rem;font-style:italic;color:#d4cfc5;max-width:480px;margin:0 auto 1rem;line-height:1.6}
.kw-closing-attr{font-family:'Cormorant Garamond',Georgia,serif;font-size:.78rem;color:#6b665c;letter-spacing:.1em}
.kw-foot{text-align:center;padding:2rem;border-top:1px solid rgba(201,168,76,.06)}
.kw-foot p{font-family:'Cormorant Garamond',Georgia,serif;font-size:.7rem;color:#6b665c;letter-spacing:.08em}
.kw-float-cta{position:fixed;bottom:0;left:0;right:0;background:rgba(10,10,10,.95);backdrop-filter:blur(10px);border-top:1px solid rgba(201,168,76,.2);padding:.85rem 2rem;display:flex;justify-content:center;align-items:center;gap:1.5rem;z-index:99;transform:translateY(100%);transition:transform .4s ease}
.kw-float-cta.visible{transform:translateY(0)}
.kw-float-text{font-family:'Cormorant Garamond',Georgia,serif;font-size:.82rem;color:#d4cfc5}
.kw-btn-float{font-family:'Cormorant Garamond',Georgia,serif;font-size:.78rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#0a0a0a;background:#c9a84c;padding:.65rem 1.6rem;text-decoration:none;transition:background .3s}
.kw-btn-float:hover{background:#e4cc7a}
.kw-float-book{font-family:'Cormorant Garamond',Georgia,serif;font-size:.72rem;color:#a8872e;display:flex;align-items:center;gap:.4rem}
@keyframes kwFade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:768px){
  .kw-page{padding:2rem 1rem 1.5rem}
  .kw-steps{grid-template-columns:1fr}
  .kw-book-bar{flex-direction:column;text-align:center;gap:1rem}
  .kw-book-bar-text{text-align:center}
  .kw-book-preview{flex-direction:column;text-align:center}
  .kw-book-mock{margin:0 auto}
  .kw-cta-bar{padding:2rem 1.5rem}
  .kw-btn-book{padding:1rem 2.5rem;font-size:.9rem}
  .kw-float-text,.kw-float-book{display:none}
}
`;

const KingleyWebinarPage: React.FC = () => {
    const videoRef = useRef<HTMLDivElement>(null);
    const [floatVisible, setFloatVisible] = useState(false);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => setFloatVisible(!e.isIntersecting));
        }, { threshold: 0.1 });
        obs.observe(videoRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="kw-root">
            <style>{css}</style>

            <div className="kw-topbar">
                <a href="/" className="kw-topbar-brand">Kingley Foundation</a>
            </div>

            <div className="kw-page">
                <div className="kw-urgency">
                    <span className="kw-urgency-badge">Private Training — Do Not Share This Link</span>
                </div>

                <div className="kw-pre-video">
                    <h1>Why Your Doctor Can't Find What's Wrong<br/><em>And What's Actually Causing Your Symptoms</em></h1>
                    <p>Watch the full training below. Download your free copy of the book. Then book your free 15-minute session with Malcolm.</p>
                </div>

                <div className="kw-video-wrapper" ref={videoRef}>
                    <div className="kw-video-aspect">
                        <iframe
                            src="about:blank"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Everything Came Back Normal — Training"
                        />
                    </div>
                </div>

                <div className="kw-book-bar">
                    <div className="kw-book-bar-icon">📖</div>
                    <div className="kw-book-bar-text">
                        <div className="kw-book-bar-title">"Everything Came Back Normal" — Free Download</div>
                        <div className="kw-book-bar-sub">Read the full book while you wait for your session. Yours to keep.</div>
                    </div>
                    <a href="#" className="kw-btn-download">Download Free Book</a>
                </div>

                <div className="kw-cta-bar">
                    <h2>Ready? Book Your <em>Free</em> 15-Minute Session.</h2>
                    <div className="kw-sub">Malcolm will map your symptoms to the framework — personally, one-on-one, at zero cost.</div>
                    <a href="https://MalcolmKingley.org" className="kw-btn-book">Book Your Session Now</a>
                    <span className="kw-cta-micro">No credit card. No obligation. Limited spots available each month.</span>
                </div>

                <div className="kw-steps">
                    <div className="kw-step">
                        <div className="kw-step-num">01</div>
                        <div className="kw-step-title">Watch the Training</div>
                        <div className="kw-step-text">30 minutes. The complete framework for understanding your symptoms.</div>
                    </div>
                    <div className="kw-step">
                        <div className="kw-step-num">02</div>
                        <div className="kw-step-title">Read the Book</div>
                        <div className="kw-step-text">Download your free copy. Go deeper into the framework at your own pace.</div>
                    </div>
                    <div className="kw-step">
                        <div className="kw-step-num">03</div>
                        <div className="kw-step-title">Book Your Session</div>
                        <div className="kw-step-text">15 minutes with Malcolm. Your symptoms mapped. Zero cost.</div>
                    </div>
                </div>

                <div className="kw-book-preview">
                    <div className="kw-book-preview-content">
                        <div className="kw-book-preview-label">Your free book</div>
                        <h3>"Everything Came Back <em>Normal</em>"</h3>
                        <p>The full framework in book form — Malcolm's complete story, the architecture of conflict, the map of common conditions, the Five Laws, the She-Wolf, and the path to resolution. Read it between now and your session so you arrive with the lens already in place.</p>
                        <div className="kw-chapters">
                            15 chapters including: The Tracks • The Two Phases • The Map of Common Conditions • The Off Note • The Bulletproof Soldiers • The Five Laws &amp; Calibration Sequence • The She-Wolf in Action • Identity &amp; Frame • The School of the Operator
                        </div>
                        <a href="#" className="kw-btn-download">Download Now — Free</a>
                    </div>
                    <div className="kw-book-mock">
                        <div className="kw-book-mock-title">"Everything Came Back <em>Normal</em>"</div>
                        <div className="kw-book-mock-author">Malcolm Kingley</div>
                    </div>
                </div>

                <div className="kw-closing">
                    <div className="kw-closing-quote">"You've spent years being told everything came back normal. It's time to find out what's actually going on."</div>
                    <div className="kw-closing-attr">— Malcolm Kingley</div>
                </div>
            </div>

            <div className="kw-foot">
                <p>Kingley Foundation — 508(c)(1)(A) — State of Washington</p>
                <p style={{marginTop:'.4rem'}}>© Malcolm Kingley. All rights reserved. This training is for registered participants only.</p>
            </div>

            <div className={`kw-float-cta${floatVisible ? ' visible' : ''}`}>
                <span className="kw-float-text">Ready to find the off note?</span>
                <a href="https://MalcolmKingley.org" className="kw-btn-float">Book Free Session</a>
                <span className="kw-float-book">📖 Free book included</span>
            </div>
        </div>
    );
};

export default KingleyWebinarPage;
