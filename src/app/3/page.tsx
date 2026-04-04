"use client"
import Link from "next/link"
import { useState } from "react"

const subjects = [
  {
    title: "Analog Code",
    tag: "ACE-301",
    icon: "〜",
    label: "Analog Communication",
    from: "#f97316",
    to: "#ea580c",
    glow: "rgba(249,115,22,0.55)",
    href: "https://www.notion.so/Analog-Communication-Sessional-3358f9f9b28780eb972acacb662c8f22?source=copy_link",
  },
  {
    title: "OOP Code",
    tag: "OOP-302",
    icon: "◈",
    label: "Object Oriented Programming",
    from: "#8b5cf6",
    to: "#7c3aed",
    glow: "rgba(139,92,246,0.55)",
    href: "https://www.notion.so/OOPs-3358f9f9b2878062a303d7533ec13909?source=copy_link",
  },
  {
    title: "TNT Sessional",
    tag: "TNT-303",
    icon: "⬡",
    label: "Digital Electronics",
    from: "#ec4899",
    to: "#db2777",
    glow: "rgba(236,72,153,0.55)",
    href: "https://www.notion.so/Digital-Electronics-Sessional-3358f9f9b2878012acc6ead668dd35f3?source=copy_link",
  },
  {
    title: "Mathematics Code",
    tag: "MTH-304",
    icon: "⊛",
    label: "Discrete Mathematics",
    from: "#84cc16",
    to: "#65a30d",
    glow: "rgba(132,204,22,0.55)",
    href: "https://www.notion.so/Discrete-Mathematics-Sessional-3358f9f9b28780c9a76ec47dda9e6686?source=copy_link",
  },
]

export default function Semester3() {
  const [mounted] = useState(true)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #080c14;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        .page-wrapper {
          min-height: 100vh;
          background: #080c14;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem 4rem;
          position: relative;
          overflow: hidden;
        }

        /* ── Animated background mesh ── */
        .bg-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .bg-mesh::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 15% 25%, rgba(249,115,22,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 55% at 85% 75%, rgba(139,92,246,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 50% 50%, rgba(236,72,153,0.04) 0%, transparent 60%);
          animation: meshMove 14s ease-in-out infinite alternate;
        }
        @keyframes meshMove {
          0%   { opacity: 0.8; transform: scale(1) translateY(0); }
          100% { opacity: 1;   transform: scale(1.06) translateY(-12px); }
        }

        /* ── Grid overlay ── */
        .grid-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── Circuit traces ── */
        .circuit-traces {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .trace {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(132,204,22,0.12), transparent);
          height: 1px;
          animation: traceSlide linear infinite;
        }
        @keyframes traceSlide {
          0%   { transform: translateX(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(200vw); opacity: 0; }
        }
        .trace-v {
          position: absolute;
          background: linear-gradient(180deg, transparent, rgba(139,92,246,0.1), transparent);
          width: 1px;
          animation: traceSlideV linear infinite;
        }
        @keyframes traceSlideV {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(200vh); opacity: 0; }
        }

        /* ── Particles ── */
        .particles {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: floatUp linear infinite;
          opacity: 0;
        }
        @keyframes floatUp {
          0%   { transform: translateY(100vh) scale(0); opacity: 0; }
          10%  { opacity: 0.7; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }

        /* ── Back button ── */
        .back-btn {
          position: relative;
          z-index: 20;
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          margin-bottom: 2rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          transition: all 0.25s ease;
        }
        .back-btn:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.06);
        }
        .back-arrow { font-size: 0.8rem; }

        /* ── Header ── */
        .header-area {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeDown 0.7s ease both;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(132,204,22,0.7);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .eyebrow::before, .eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(132,204,22,0.4);
        }

        .sem-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(132,204,22,0.08);
          border: 1px solid rgba(132,204,22,0.2);
          border-radius: 100px;
          padding: 0.3rem 0.9rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: rgba(132,204,22,0.8);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .sem-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #84cc16;
          box-shadow: 0 0 6px #84cc16;
          animation: blinkDot 2s ease infinite;
        }
        @keyframes blinkDot {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }

        .main-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 5vw, 3rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .main-title .accent {
          background: linear-gradient(90deg, #84cc16, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          margin-top: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.22);
          text-transform: uppercase;
        }

        /* ── Cards grid ── */
        .cards-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.1rem;
          width: 100%;
          max-width: 820px;
        }
        @media (min-width: 540px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        }
        @media (min-width: 900px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        }

        /* ── Card ── */
        .card-link { text-decoration: none; display: block; }

        .card {
          position: relative;
          border-radius: 22px;
          padding: 1.75rem 1.5rem;
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.35s cubic-bezier(.22,.68,0,1.4),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          animation: cardIn 0.6s cubic-bezier(.22,.68,0,1.2) both;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .card:hover { transform: translateY(-8px) scale(1.025); }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .card-gradient {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          opacity: 0.11;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .card:hover .card-gradient { opacity: 0.2; }

        /* Corner glow */
        .card-corner-glow {
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          border-radius: 50%;
          opacity: 0.18;
          filter: blur(30px);
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .card:hover .card-corner-glow { opacity: 0.35; }

        /* Shine sweep */
        .card-shine {
          position: absolute;
          top: -80%; left: -80%;
          width: 200%; height: 200%;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.065) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
          border-radius: 22px;
        }
        .card:hover .card-shine { transform: translateX(60%); }

        /* Top row */
        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.3);
        }
        .card-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          animation: glowPulse 2.5s ease infinite;
        }
        @keyframes glowPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.3); }
        }

        /* Icon */
        .card-icon {
          font-size: 2.4rem;
          line-height: 1;
          display: block;
          transition: transform 0.35s ease, filter 0.35s ease;
        }
        .card:hover .card-icon {
          transform: scale(1.2) rotate(-6deg);
          filter: brightness(1.3);
        }

        /* Bottom text */
        .card-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(1.2rem, 3vw, 1.55rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .card-label {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          margin-top: 0.25rem;
        }

        /* Arrow indicator */
        .card-arrow {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.03);
        }
        .card:hover .card-arrow {
          color: #fff;
          border-color: rgba(255,255,255,0.3);
          transform: translate(2px, -2px);
          background: rgba(255,255,255,0.08);
        }

        /* Bottom progress bar */
        .card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 22px 22px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(.22,.68,0,1.2);
        }
        .card:hover .card-bar { transform: scaleX(1); }

        /* ── Footer ── */
        .footer {
          position: relative;
          z-index: 10;
          margin-top: 2.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.13);
          text-transform: uppercase;
          text-align: center;
        }

        /* ── N logo ── */
        .n-logo {
          position: fixed;
          bottom: 1.25rem;
          right: 1.25rem;
          z-index: 20;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1rem;
          color: rgba(255,255,255,0.12);
          letter-spacing: 0.05em;
          transition: color 0.3s;
          text-decoration: none;
        }
        .n-logo:hover { color: rgba(132,204,22,0.5); }
      `}</style>

      <div className="page-wrapper">
        {/* Backgrounds */}
        <div className="bg-mesh" />
        <div className="grid-overlay" />

        {/* Circuit traces */}
        <div className="circuit-traces">
          {mounted && [
            { top: "18%", width: "35vw", dur: "9s", delay: "0s", color: "rgba(132,204,22,0.12)" },
            { top: "45%", width: "25vw", dur: "13s", delay: "3s", color: "rgba(249,115,22,0.1)" },
            { top: "72%", width: "40vw", dur: "11s", delay: "1.5s", color: "rgba(139,92,246,0.1)" },
          ].map((t, i) => (
            <div key={i} className="trace" style={{
              top: t.top, width: t.width,
              animationDuration: t.dur, animationDelay: t.delay,
              background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`,
            }} />
          ))}
          {mounted && [
            { left: "20%", height: "30vh", dur: "11s", delay: "2s" },
            { left: "60%", height: "45vh", dur: "15s", delay: "5s" },
            { left: "80%", height: "28vh", dur: "9s", delay: "0.5s" },
          ].map((t, i) => (
            <div key={i} className="trace-v" style={{
              left: t.left, height: t.height,
              animationDuration: t.dur, animationDelay: t.delay,
            }} />
          ))}
        </div>

        {/* Particles */}
        <div className="particles">
          {mounted && Array.from({ length: 16 }).map((_, i) => {
            const colors = ["#f97316","#8b5cf6","#ec4899","#84cc16","#06b6d4"]
            const color = colors[i % colors.length]
            const size = 3 + (i % 4) * 2
            return (
              <div key={i} className="particle" style={{
                left: `${(i * 6.4) % 100}%`,
                width: size, height: size,
                background: color,
                animationDuration: `${9 + (i % 6) * 1.5}s`,
                animationDelay: `${(i * 1.1) % 8}s`,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }} />
            )
          })}
        </div>

        {/* Back button */}
        <Link href="/" className="back-btn">
          <span className="back-arrow">←</span>
          <span>Back to Semesters</span>
        </Link>

        {/* Header */}
        <div className="header-area">
          <div className="sem-badge">
            <span className="sem-badge-dot" />
            Semester 03
          </div>
          <div className="eyebrow">ICE · Academic Resources</div>
          <h1 className="main-title">
            Third <span className="accent">Semester</span>
            <br />Sessional Codes
          </h1>
          <p className="subtitle">4 Subjects · Click to open in Notion</p>
        </div>

        {/* Cards */}
        <div className="cards-grid">
          {subjects.map((s, i) => (
            <Link
              href={s.href}
              key={i}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="card"
                style={{
                  animationDelay: `${i * 0.1 + 0.25}s`,
                  boxShadow: hovered === i
                    ? `0 24px 64px -12px ${s.glow}, 0 0 0 1px ${s.from}44`
                    : `0 4px 24px rgba(0,0,0,0.5)`,
                  borderColor: hovered === i ? `${s.from}44` : "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="card-gradient" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }} />
                <div className="card-corner-glow" style={{ background: s.from }} />
                <div className="card-shine" />

                <div className="card-top">
                  <span className="card-tag">{s.tag}</span>
                  <div className="card-dot" style={{ background: s.from, boxShadow: `0 0 10px ${s.from}` }} />
                </div>

                <span className="card-icon" style={{ color: s.from }}>{s.icon}</span>

                <div style={{ paddingRight: "2.5rem" }}>
                  <div className="card-title" style={{ color: "#fff" }}>{s.title}</div>
                  <div className="card-label">{s.label}</div>
                </div>

                <div className="card-arrow">↗</div>

                <div className="card-bar" style={{ background: `linear-gradient(90deg, ${s.from}, ${s.to})` }} />
              </div>
            </Link>
          ))}
        </div>

        <div className="footer">Semester 03 · Information &amp; Communication Engineering</div>

        {/* N logo */}
        <span className="n-logo">N</span>
      </div>
    </>
  )
}