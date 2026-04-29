"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center px-4 py-20 sm:px-6 sm:py-24 md:px-[6vw] lg:pl-[38vw] xl:pl-[42vw] xl:py-32 2xl:pl-[46vw]"
    >
      <div style={{ maxWidth: "560px" }}>
        <p
          className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em]"
          style={{ color: "var(--accent)" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "1px",
              background: "var(--accent)",
            }}
          />
          About me
        </p>
        <h2
          className="mb-6 font-syne font-black leading-[1.05]"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#E2EEFF" }}
        >
          Developer.
          <br />
          <span style={{ color: "var(--accent2)" }}>Designer</span> at heart.
          <br />
          AI <span style={{ color: "var(--accent)" }}>explorer.</span>
        </h2>
        <p
          className="mb-6 font-mono text-[0.78rem] leading-[2] sm:text-[0.82rem]"
          style={{ color: "rgba(226,238,255,0.5)" }}
        >
          Based in Punjab, Pakistan, I build more than interfaces. I build
          products that feel polished across screens. From modern Next.js
          platforms to mobile apps in React Native and Ionic, I focus on
          frontend experiences that are fast, clear, and human.
        </p>
        <p
          className="font-mono text-[0.78rem] leading-[2] sm:text-[0.82rem]"
          style={{ color: "rgba(226,238,255,0.5)" }}
        >
          My stack includes React, Next.js, React Native, Ionic, Redux, and
          Tailwind, along with hands-on work in AI integrations. I have built
          with multiple AI models, RAG pipelines, and agentic RAG systems,
          connecting intelligent backends to clean, intuitive interfaces that
          solve real product needs.
        </p>
        <div className="mt-8 grid gap-3">
          <div
            className="p-4 sm:p-5"
            style={{
              background: "rgba(13,21,38,0.58)",
              border: "1px solid rgba(226,238,255,0.06)",
              borderRadius: "4px",
            }}
          >
            <div
              className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "var(--accent2)" }}
            >
              Education
            </div>
            <div
              className="font-syne text-lg font-bold"
              style={{ color: "#E2EEFF" }}
            >
              BSCS - Computer Science
            </div>
            <div
              className="mt-1 font-mono text-[11px]"
              style={{ color: "rgba(177,111,255,0.78)" }}
            >
              University of Gujrat (UOG) | 2020 - 2024 | 3.78/4.00 CGPA
            </div>
          </div>

          <div
            className="p-4 sm:p-5"
            style={{
              background: "rgba(13,21,38,0.58)",
              border: "1px solid rgba(226,238,255,0.06)",
              borderRadius: "4px",
            }}
          >
            <div
              className="font-syne text-lg font-bold"
              style={{ color: "#E2EEFF" }}
            >
              FSc Pre-Engineering
            </div>
            <div
              className="mt-1 font-mono text-[11px]"
              style={{ color: "rgba(0,200,255,0.78)" }}
            >
              Superior College, M.B. Din | 2018 - 2020 | 87% Marks
            </div>
          </div>
        </div>
        {/* <div className="mt-8 flex flex-wrap gap-3">
          {[
            "React Native",
            "RAG Systems",
            "AI Integrations",
            "Computer Science",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 font-mono text-xs tracking-widest"
              style={{
                border: "1px solid rgba(177,111,255,0.3)",
                color: "var(--accent2)",
                borderRadius: "2px",
                background: "rgba(177,111,255,0.06)",
              }}
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
