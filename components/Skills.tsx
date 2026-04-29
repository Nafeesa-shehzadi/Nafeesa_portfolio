"use client";
import { useEffect, useRef } from "react";

const skills = [
  {
    name: "React & Next.js",
    level: 92,
    color: "#00FFB2",
    category: "Frontend",
    icon: "FE",
  },
  {
    name: "TypeScript",
    level: 85,
    color: "#00C8FF",
    category: "Language",
    icon: "TS",
  },
  // {
  //   name: "React Native",
  //   level: 84,
  //   color: "#61DAFB",
  //   category: "Mobile",
  //   icon: "RN",
  // },
  {
    name: "Hume AI & OpenAI",
    level: 80,
    color: "#FF6FB1",
    category: "AI/ML",
    icon: "AI",
  },
  {
    name: "Tailwind, MUI & Hero UI",
    level: 91,
    color: "#B16FFF",
    category: "Styling",
    icon: "UI",
  },
  {
    name: "Ionic React & React Native",
    level: 89,
    color: "#FFAA00",
    category: "Mobile",
    icon: "MB",
  },
  {
    name: "RAG & Agentic RAG",
    level: 87,
    color: "#7CFF6B",
    category: "AI Architecture",
    icon: "RG",
  },
  // {
  //   name: "Agentic RAG",
  //   level: 79,
  //   color: "#FF8A65",
  //   category: "AI Workflows",
  //   icon: "AR",
  // },
  {
    name: "Redux & Zustand",
    level: 82,
    color: "#00FFB2",
    category: "State",
    icon: "ST",
  },
  {
    name: "REST APIs",
    level: 88,
    color: "#00C8FF",
    category: "Integration",
    icon: "API",
  },
  {
    name: "Dashboard & Ecommerce UI",
    level: 86,
    color: "#FFAA00",
    category: "Product UI",
    icon: "PX",
  },
  {
    name: "Git & Agile/Scrum",
    level: 86,
    color: "#B16FFF",
    category: "Workflow",
    icon: "WF",
  },
];

export default function Skills() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardsRef.current.indexOf(
              entry.target as HTMLDivElement,
            );
            const bar = (entry.target as HTMLElement).querySelector(
              ".skill-bar",
            ) as HTMLElement | null;
            if (bar)
              setTimeout(() => {
                bar.style.width = bar.dataset.w || "0%";
              }, idx * 80);
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-[6vw] lg:pr-[28vw] xl:pr-[32vw] xl:py-32 2xl:pr-[36vw]"
    >
      <p
        className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em]"
        style={{ color: "var(--accent3)" }}
      >
        <span
          style={{
            display: "inline-block",
            width: "24px",
            height: "1px",
            background: "var(--accent3)",
          }}
        />
        Technical Skills
      </p>
      <h2
        className="mb-12 font-syne font-black"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E2EEFF" }}
      >
        What I <span style={{ color: "var(--accent3)" }}>build</span> with
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="group p-5 transition-all duration-300"
            style={{
              background: "rgba(13,21,38,0.6)",
              border: "1px solid rgba(226,238,255,0.06)",
              borderRadius: "4px",
              opacity: 0,
              transform: "translateY(20px)",
              transition:
                "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${skill.color}44`;
              e.currentTarget.style.background = "rgba(13,21,38,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(226,238,255,0.06)";
              e.currentTarget.style.background = "rgba(13,21,38,0.6)";
            }}
          >
            <style jsx>{`
              .is-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }
            `}</style>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span
                  className="mr-2 inline-flex min-w-7 justify-center text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span
                  className="font-syne text-sm font-bold"
                  style={{ color: "#E2EEFF" }}
                >
                  {skill.name}
                </span>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </span>
                <span
                  className="px-2 py-0.5 text-[10px] uppercase tracking-widest"
                  style={{
                    color: skill.color,
                    border: `1px solid ${skill.color}33`,
                    background: `${skill.color}11`,
                    borderRadius: "2px",
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </div>
            <div
              style={{
                height: "3px",
                background: "rgba(226,238,255,0.06)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                className="skill-bar"
                data-w={`${skill.level}%`}
                style={{
                  height: "100%",
                  width: "0%",
                  borderRadius: "2px",
                  background: `linear-gradient(to right, ${skill.color}88, ${skill.color})`,
                  transition: "width 1.2s cubic-bezier(0.25,1,0.5,1)",
                  boxShadow: `0 0 8px ${skill.color}66`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
