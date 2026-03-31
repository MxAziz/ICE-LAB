// import Link from "next/link"

// export default function Home() {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-10">
//       <h1 className="text-4xl font-bold text-center">
//         Information and Communication Engineering
//       </h1>
//       <div className="px-12 grid grid-cols-2 md:grid-cols-4 place-items-center gap-10">
//         <Link href="/1">
//           <button className="bg-teal-400 px-28 py-18 rounded-3xl text-black">
//             Semester 1
//           </button>
//         </Link>
//         <Link href="/2">
//           <button className="bg-amber-200 px-28 py-18 rounded-3xl text-black">
//             Semester 2
//           </button>
//         </Link>
//         <Link href="/3">
//           <button className="bg-green-400 px-28 py-18 rounded-3xl text-black">
//             Semester 3
//           </button>
//         </Link>
//         <Link href="/4">
//           <button className="bg-blue-400 px-28 py-18 rounded-3xl text-black">
//             Semester 4
//           </button>
//         </Link>
//         <Link href="/5">
//           <button className="bg-teal-400 px-28 py-18 rounded-3xl text-black">
//             Semester 5
//           </button>
//         </Link>
//         <Link href="/6">
//           <button className="bg-teal-400 px-28 py-18 rounded-3xl text-black">
//             Semester 6
//           </button>
//         </Link>
//         <Link href="/7">
//           <button className="bg-teal-400 px-28 py-18 rounded-3xl text-black">
//             Semester 7
//           </button>
//         </Link>
//         <Link href="/8">
//           <button className="bg-teal-400 px-28 py-18 rounded-3xl text-black">
//             Semester 8
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client"
import Link from "next/link"
import { useState } from "react"

const semesters = [
  {
    num: 1,
    from: "#06b6d4",
    to: "#0891b2",
    glow: "rgba(6,182,212,0.5)",
    icon: "〜",
    label: "Signals & Systems",
    tag: "S-01",
  },
  {
    num: 2,
    from: "#f59e0b",
    to: "#d97706",
    glow: "rgba(245,158,11,0.5)",
    icon: "⬡",
    label: "Circuit Theory",
    tag: "S-02",
  },
  {
    num: 3,
    from: "#10b981",
    to: "#059669",
    glow: "rgba(16,185,129,0.5)",
    icon: "◈",
    label: "Data Networks",
    tag: "S-03",
  },
  {
    num: 4,
    from: "#3b82f6",
    to: "#2563eb",
    glow: "rgba(59,130,246,0.5)",
    icon: "⊛",
    label: "Digital Comms",
    tag: "S-04",
  },
  {
    num: 5,
    from: "#ec4899",
    to: "#db2777",
    glow: "rgba(236,72,153,0.5)",
    icon: "⊕",
    label: "Microprocessors",
    tag: "S-05",
  },
  {
    num: 6,
    from: "#8b5cf6",
    to: "#7c3aed",
    glow: "rgba(139,92,246,0.5)",
    icon: "⌬",
    label: "Wireless Systems",
    tag: "S-06",
  },
  {
    num: 7,
    from: "#f97316",
    to: "#ea580c",
    glow: "rgba(249,115,22,0.5)",
    icon: "⊞",
    label: "VLSI Design",
    tag: "S-07",
  },
  {
    num: 8,
    from: "#14b8a6",
    to: "#0d9488",
    glow: "rgba(20,184,166,0.5)",
    icon: "✦",
    label: "Final Project",
    tag: "S-08",
  },
]

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null)
  const mounted = typeof window !== "undefined"

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
          padding: 2rem 1.5rem 3rem;
          position: relative;
          overflow: hidden;
        }

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
            radial-gradient(ellipse 60% 50% at 20% 20%, rgba(6,182,212,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 80%, rgba(139,92,246,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 60%);
          animation: meshMove 12s ease-in-out infinite alternate;
        }
        @keyframes meshMove {
          0%   { opacity: 0.8; transform: scale(1); }
          100% { opacity: 1;   transform: scale(1.05) translateY(-10px); }
        }

        .grid-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
        }

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
          10%  { opacity: 0.6; }
          90%  { opacity: 0.3; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }

        .header-area {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeDown 0.8s ease both;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(6,182,212,0.7);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .eyebrow::before,
        .eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: rgba(6,182,212,0.4);
        }

        .main-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(1.6rem, 5vw, 3.2rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .main-title span {
          background: linear-gradient(90deg, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          margin-top: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
        }

        .cards-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          width: 100%;
          max-width: 900px;
        }

        @media (min-width: 900px) {
          .cards-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        }

        .card-link { text-decoration: none; display: block; }

        .card {
          position: relative;
          border-radius: 20px;
          padding: 1.5rem 1.25rem;
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.35s cubic-bezier(.22,.68,0,1.4),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          animation: cardIn 0.6s cubic-bezier(.22,.68,0,1.2) both;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card:hover { transform: translateY(-8px) scale(1.03); }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .card-gradient {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0.12;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .card:hover .card-gradient { opacity: 0.22; }

        .card-shine {
          position: absolute;
          top: -80%;
          left: -80%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.07) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        .card:hover .card-shine { transform: translateX(60%); }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.35);
        }
        .card-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .card-icon {
          font-size: 2rem;
          line-height: 1;
          margin: 0.6rem 0;
          transition: transform 0.35s ease;
          display: block;
        }
        .card:hover .card-icon { transform: scale(1.2) rotate(-5deg); }

        .card-sem {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.6rem;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #fff;
        }
        .card-label {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          margin-top: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 0 0 20px 20px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2);
        }
        .card:hover .card-bar { transform: scaleX(1); }

        .footer {
          position: relative;
          z-index: 10;
          margin-top: 2.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.15);
          text-transform: uppercase;
          text-align: center;
        }
      `}</style>

      <div className="page-wrapper">
        <div className="bg-mesh" />
        <div className="grid-overlay" />

        {/* Floating particles */}
        <div className="particles">
          {mounted && Array.from({ length: 18 }).map((_, i) => {
            const colors = ["#06b6d4","#8b5cf6","#10b981","#f59e0b","#ec4899","#3b82f6"]
            const color = colors[i % colors.length]
            const size = 3 + (i % 4) * 2
            return (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${(i * 5.7) % 100}%`,
                  width: size,
                  height: size,
                  background: color,
                  animationDuration: `${8 + (i % 7) * 1.5}s`,
                  animationDelay: `${(i * 0.9) % 7}s`,
                  boxShadow: `0 0 ${size * 2}px ${color}`,
                }}
              />
            )
          })}
        </div>

        {/* Header */}
        <div className="header-area">
          <div className="eyebrow">Academic Roadmap</div>
          <h1 className="main-title">
            Information &amp; <span>Communication</span>
            <br />Engineering
          </h1>
          <p className="subtitle">8 Semesters · Full Curriculum</p>
        </div>

        {/* Cards */}
        <div className="cards-grid">
          {semesters.map((s, i) => (
            <Link href={`/${s.num}`} key={s.num} className="card-link">
              <div
                className="card"
                style={{
                  animationDelay: `${i * 0.07 + 0.3}s`,
                  boxShadow: hovered === s.num
                    ? `0 20px 60px -10px ${s.glow}, 0 0 0 1px ${s.from}44`
                    : `0 4px 24px rgba(0,0,0,0.4)`,
                  borderColor: hovered === s.num ? `${s.from}44` : "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={() => setHovered(s.num)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="card-gradient"
                  style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
                />
                <div className="card-shine" />

                <div className="card-top">
                  <span className="card-tag">{s.tag}</span>
                  <div
                    className="card-dot"
                    style={{
                      background: s.from,
                      boxShadow: `0 0 8px ${s.from}`,
                    }}
                  />
                </div>

                <span className="card-icon" style={{ color: s.from }}>{s.icon}</span>

                <div>
                  <div className="card-sem">
                    Sem <span style={{ color: s.from }}>{s.num}</span>
                  </div>
                  <div className="card-label">{s.label}</div>
                </div>

                <div
                  className="card-bar"
                  style={{ background: `linear-gradient(90deg, ${s.from}, ${s.to})` }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="footer">Select a semester to explore its courses</div>
      </div>
    </>
  )
}
