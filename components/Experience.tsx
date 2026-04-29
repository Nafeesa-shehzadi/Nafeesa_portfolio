"use client";

const experiences = [
  {
    period: "Oct 2024 - Present",
    role: "Frontend Web Developer",
    company: "GSoft Consulting",
    color: "#00FFB2",
    desc: "Building production-ready web and mobile apps with Next.js, React Native, and Ionic React. Delivered AI-powered features including agent workflows, OTP authentication, real-time communication, and Stripe payment flows using Hume AI and OpenAI.",
    tags: ["Next.js", "React Native", "Ionic React", "OpenAI", "Stripe"],
  },
  {
    period: "Oct 2023 - Feb 2024",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    color: "#B16FFF",
    desc: "Designed and deployed custom websites for small businesses with contact systems, appointment booking, and admin dashboards tailored to each client and their workflow.",
    tags: ["React", "Tailwind", "Admin Panels", "Client Delivery"],
  },
  {
    period: "Mar 2023 - Oct 2023",
    role: "Frontend Development Intern",
    company: "Techcorp.info",
    color: "#FF6FB1",
    desc: "Completed an internship focused on practical frontend development, learning how to turn requirements into usable interfaces while improving teamwork, debugging, API integration, and production-ready development habits.",
    tags: [
      "Internship",
      "Frontend Development",
      "API Integration",
      "Team Collaboration",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-[6vw] lg:pr-[34vw] xl:pr-[36vw] xl:py-32 2xl:pr-[42vw]"
    >
      <p
        className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em]"
        style={{ color: "#00C8FF" }}
      >
        <span
          style={{
            display: "inline-block",
            width: "24px",
            height: "1px",
            background: "#00C8FF",
          }}
        />
        Work
      </p>
      <h2
        className="mb-12 font-syne font-black"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E2EEFF" }}
      >
        Experience behind my <span style={{ color: "#00C8FF" }}>work</span>
      </h2>

      <div
        className="relative pl-6 sm:pl-8"
        style={{ borderLeft: "1px solid rgba(0,200,255,0.2)" }}
      >
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-12 group">
            <div
              style={{
                position: "absolute",
                left: "-1.72rem",
                top: "6px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: exp.color,
                boxShadow: `0 0 14px ${exp.color}`,
              }}
            />
            <div
              className="mb-1 font-mono text-xs uppercase tracking-[0.18em]"
              style={{ color: exp.color }}
            >
              {exp.period}
            </div>
            <div
              className="mb-1 font-syne text-xl font-bold"
              style={{ color: "#E2EEFF" }}
            >
              {exp.role}
            </div>
            <div
              className="mb-3 font-mono text-xs"
              style={{ color: `${exp.color}bb` }}
            >
              {exp.company}
            </div>
            <p
              className="mb-4 max-w-[520px] font-mono text-xs leading-[2]"
              style={{ color: "rgba(226,238,255,0.45)" }}
            >
              {exp.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 font-mono text-[10px] tracking-wider"
                  style={{
                    background: `${exp.color}0d`,
                    border: `1px solid ${exp.color}33`,
                    color: exp.color,
                    borderRadius: "2px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
