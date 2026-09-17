"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXPERIENCES = [
  {
    company: "Cerevyn Solutions Pvt Ltd",
    role: "Full Stack / Frontend Developer Intern",
    period: "Jun 2026 – Jul 2026",
    location: "Remote (T-HUB Hyderabad)",
    project: "BioFactor Pulse",
    bullets: [
      "Spearheaded frontend engineering for BioFactor Pulse, an enterprise agricultural field operations platform, building modular UI components with React.js.",
      "Engineered real-time operations dashboards, field CRM modules, and workforce tracking systems with live leaderboards and automated attendance workflows.",
      "Integrated backend REST APIs with client-side state and enforced Role-Based Access Control (RBAC), elevating UI rendering performance and multi-tenant security.",
    ],
    tech: ["React.js", "REST APIs", "RBAC", "State Management", "Enterprise Dashboards"],
  },
  {
    company: "National Institute of Technology (NIT), Tiruchirappalli",
    role: "Research Intern — Machine Learning",
    period: "May 2025 – Jul 2025",
    location: "Tiruchirappalli, Tamil Nadu",
    mentor: "Dr. Vinay Raj, Assistant Professor",
    bullets: [
      "Conducted foundational research on core Machine Learning algorithms and predictive model architectures under faculty guidance.",
      "Constructed end-to-end data preprocessing, feature engineering, and cross-validation pipelines in Python to optimize model accuracy and stability.",
      "Analyzed multidimensional datasets, benchmarked predictive performance metrics, and documented technical findings.",
    ],
    tech: ["Python", "Machine Learning", "Data Preprocessing", "Statistical Modeling", "Validation Pipelines"],
  },
  {
    company: "House of Companies",
    role: "Software Developer Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Remote (Hyderabad, Telangana)",
    bullets: [
      "Developed robust web application modules using Java, HTML/CSS, and relational database systems in an Agile/Scrum engineering environment.",
      "Actively contributed across the complete Software Development Life Cycle (SDLC), participated in daily standups, and submitted tested code deliverables.",
      "Collaborated with cross-functional engineering teams to implement clean architectural patterns and responsive interface standards.",
    ],
    tech: ["Java", "HTML5/CSS3", "Relational Databases", "Agile/Scrum", "SDLC"],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".exp-item");
      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience-section" ref={sectionRef} className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg">
      <div className="pj-head mb-12">
        <span className="pj-label">CAREER JOURNEY</span>
        <h2 className="pj-title">internships &amp; research</h2>
      </div>

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.company}
            className="exp-item p-6 sm:p-8 lg:p-10 rounded-3xl bg-bg-alt border border-theme-border hover:border-accent/60 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-theme-border">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold tracking-wider uppercase">
                    0{idx + 1} // INTERNSHIP
                  </span>
                  <span className="text-xs text-fg-muted font-medium">{exp.location}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                  {exp.role}
                </h3>
                <h4 className="text-base sm:text-lg font-medium text-fg-muted mt-1">
                  {exp.company}
                </h4>
              </div>
              <div className="text-sm font-semibold tracking-wider text-fg-muted md:text-right bg-fg/5 px-4 py-2 rounded-full self-start md:self-center">
                {exp.period}
              </div>
            </div>

            {/* Bullets */}
            <ul className="mt-6 flex flex-col gap-3 text-sm sm:text-base text-fg-muted/90 leading-relaxed">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent text-base mt-0.5 font-bold shrink-0">➔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-theme-border/60">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-fg/5 text-fg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
