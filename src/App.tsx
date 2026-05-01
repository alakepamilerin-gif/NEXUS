import { useState, useEffect } from "react";
type Property = { id: number; name: string; tokenId: string; location: string; price: string; image: string };
const toastStyle = {
  position: "fixed" as const, bottom: "24px", left: "50%", transform: "translateX(-50%)",
  background: "#111", color: "#fff", padding: "14px 28px", borderRadius: "12px",
  fontSize: "14px", fontWeight: "600", zIndex: 99999, border: "1px solid #333",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)", fontFamily: "'Orbitron', sans-serif",
  letterSpacing: "0.5px",
};
const showToast = (msg: string) => {
  const t = document.createElement("div");
  t.textContent = msg;
  Object.assign(t.style, toastStyle);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
};
export default function NexusEstate() {
  const [txs, setTxs] = useState<string[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/properties")
      .then((r) => r.json())
      .then(setProperties)
      .catch(console.error);
  }, []);
  const scrollToEstate = () => document.getElementById("estate")?.scrollIntoView({ behavior: "smooth" });
  const handleMint = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/mint");
    const data = await res.json();

    const message = `Property minted in block #${data.block}`;

    showToast(`✨ ${message}`);
    setTxs((prev) => [message, ...prev]);
  } catch (err) {
    showToast("⚠️ Transaction failed");
  }
};
  const handleConnect = () => showToast("🔌 Connect Wallet is coming soon — hang tight!");
  const handleContact = () => showToast("📧 Contact feature coming soon — reach us on Twitter!");
  const handleExplore = () => {
    showToast("🚀 Explore Estate — mapping the metaverse grid, stay tuned!");
    setTimeout(scrollToEstate, 1200);
  };
  return (
    <div style={{ fontFamily: "'Orbitron', sans-serif", margin: 0, padding: 0, boxSizing: "border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a !important; color: white !important; font-family: 'Orbitron', sans-serif !important; min-height: 100vh; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; background-size: cover; background-position: center; position: relative; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%); }
        .hero-card { position: relative; z-index: 2; background: rgba(0,0,0,0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); padding: 60px; border-radius: 16px; text-align: center; maxWidth: 800px; animation: fadeInUp 1s ease-out; }
        .hero-card h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #FFD700; line-height: 1.2; margin-bottom: 20px; }
        .hero-card p { color: #d1d5db; font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px; }
        .hero-btn { background: #FFD700; color: black; padding: 14px 32px; border-radius: 10px; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; font-family: 'Orbitron', sans-serif; }
        .hero-btn:hover { transform: scale(1.05); box-shadow: 0 8px 25px rgba(255,215,0,0.4); }
        .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); animation: float 2s ease-in-out infinite; background: none; border: none; cursor: pointer; font-family: 'Orbitron', sans-serif; font-size: 0.8rem; letter-spacing: 2px; display: flex; flex-direction: column; align-items: center; gap: 8px; color: #FFD700; }
        .property-card { background: linear-gradient(145deg, #1a1a25, #12121a); border: 1px solid #2a2a3a; border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: fadeInUp 0.6s ease-out; }
        .property-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(255,215,0,0.15); border-color: #FFD700; }
        .mint-btn { padding: 12px 28px; font-size: 0.85rem; font-weight: 700; border: none; border-radius: 30px; cursor: pointer; transition: all 0.3s; background: linear-gradient(135deg, #FFD700, #FFA500); color: black; font-family: 'Orbitron', sans-serif; letter-spacing: 0.5px; }
        .mint-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(255,215,0,0.5); }
        .cta-btn { padding: 18px 50px; font-size: 1.1rem; font-weight: 700; border: none; border-radius: 50px; cursor: pointer; background: linear-gradient(135deg, #FFD700, #FFA500); color: black; font-family: 'Orbitron', sans-serif; letter-spacing: 1px; transition: all 0.3s; box-shadow: 0 4px 20px rgba(255,215,0,0.4); }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(255,215,0,0.6); }
      `}</style>

      {/* HERO */}
      <section className="hero-section" style={{ backgroundImage: "url('https://dminister.zo.space/nexus-estate-images/house1.jpg')" }}>
        <div className="hero-overlay" />
        <div className="hero-card">
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#FFD700", lineHeight: 1.2, marginBottom: 20 }}>
            Owning the Future of Real Estate — On Chain
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 30 }}>
            I am building a decentralized digital estate where properties are not just owned — they are verified, tokenized, and accessible globally without intermediaries.
          </p>
          <p style={{ color: "#d1d5db", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "2px", marginBottom: 30, textTransform: "uppercase" }}>
            This is more than real estate. This is a shift in ownership.
          </p>
          <button className="hero-btn" onClick={handleExplore}>Explore Estate</button>
        </div>
        <button className="scroll-indicator" onClick={scrollToEstate}>
          <span>SCROLL</span>
          <span style={{ fontSize: "1.5rem" }}>↓</span>
        </button>
      </section>

      {/* ABOUT / FOUNDER */}
      <section style={{ padding: "80px 24px", maxWidth: "1000px", margin: "0 auto", textAlign: "center", animation: "fadeInUp 1s ease-out" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "40px", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Meet the Founder</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
          <div style={{ width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #FFD700", boxShadow: "0 0 40px rgba(255,215,0,0.3)", animation: "float 4s ease-in-out infinite" }}>
            <img src="https://dminister.zo.space/nexus-estate-images/founder.jpg" alt="Founder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ maxWidth: "600px", textAlign: "left" }}>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", marginBottom: "16px" }}>I am not just selling properties — I am redefining ownership.</p>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", marginBottom: "16px" }}>In a world where trust is centralized, I am building a system where every property is secured on the blockchain, every transaction is transparent, and ownership is truly yours.</p>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", fontWeight: 600 }}>This project is my step toward a future where real estate is decentralized, borderless, and accessible to anyone, anywhere.</p>
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "1rem", marginTop: "16px", fontStyle: "italic" }}>Nexus Estate is not just a platform — it is the beginning of a new era.</p>
            <button className="cta-btn" style={{ marginTop: "30px", padding: "12px 30px", fontSize: "0.9rem" }} onClick={handleContact}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* ESTATE */}
      <section id="estate" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, textAlign: "center", marginBottom: "10px", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>The Digital Estate</h2>
        <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "50px", fontSize: "1rem", letterSpacing: "1px" }}>Each property here is more than a structure — it is a digital asset, secured and verifiable on-chain.</p>
        <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "30px", fontSize: "0.9rem", fontStyle: "italic" }}>Explore, interact, and experience the future of ownership.</p>
        {properties.length === 0 ? (
          <p style={{ textAlign: "center", color: "#94a3b8" }}>Loading properties...</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px" }}>
            {properties.map((p, i) => (
              <div key={p.id} className="property-card" style={{ animationDelay: `${i * 0.1}s` }}>
              
                <div style={{ height: "220px", backgroundImage: `url('${p.image}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                  <div style={{ position: "absolute", top: "15px", right: "15px", background: "linear-gradient(135deg, #FFD700, #FFA500)", color: "black", padding: "6px 16px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.5px" }}>{p.price}</div>
                </div>
                <div style={{ padding: "25px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px", color: "#FFD700" }}>{p.name}</h3>
                  <p style={{ color: "#667eea", fontSize: "0.8rem", marginBottom: "12px", letterSpacing: "0.5px" }}>Token ID: {p.tokenId}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>📍 {p.location}</span>
                    <button className="mint-btn" onClick={handleMint}>Mint Property</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: "60px", maxWidth: "600px", marginInline: "auto", textAlign: "left" }}>
  <h3 style={{ color: "#FFD700", marginBottom: "15px", fontSize: "1.2rem" }}>
    Live Transactions
  </h3>

  {txs.length === 0 ? (
    <p style={{ color: "#555", fontSize: "0.9rem" }}>
      Awaiting first mint...
    </p>
  ) : (
    txs.map((tx, i) => (
      <p key={i} style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "8px" }}>
        {tx}
      </p>
    ))
  )}
</div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center", background: "linear-gradient(135deg, #12121a, #1a1a2e)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "15px", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", position: "relative", zIndex: 2 }}>Own a Piece of the Future</h2>
        <p style={{ color: "#94a3b8", marginBottom: "40px", fontSize: "1rem", position: "relative", zIndex: 2 }}>Secure your digital property today</p>
        <button className="cta-btn" onClick={handleConnect} style={{ position: "relative", zIndex: 2 }}>Connect Wallet</button>
      </section>

      {/* VISION */}
      <section style={{ padding: "60px 24px", textAlign: "center", borderTop: "1px solid #1a1a2e" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "20px", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Beyond Buildings</h2>
        <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>I envision a future where cities are tokenized, ownership is decentralized, and real estate becomes borderless.</p>
        <p style={{ color: "#555", fontSize: "0.9rem", fontStyle: "italic", marginTop: "20px" }}>This is just the beginning.</p>
      </section>
    </div>
  );
}