import { Container } from "react-bootstrap";

export const Experience = () => {
  const items = [
    {
      role: "Senior Fullstack Engineer",
      company: "Skippa — Maryland, United States",
      period: "Jun 2023 — Present",
      bullets: [
        "Refactored and integrated core systems to improve performance and scalability.",
        "Led delivery of Skippa: strategy visualization (Go, Node.js, CockroachDB).",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Distributed — London, United Kingdom",
      period: "Feb 2023 — Jan 2024",
      bullets: [
        "Led open‑source crypto + stocks trading platform with NestJS, Next.js, Redux, TS.",
        "Managed AWS infrastructure and full‑stack delivery.",
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Geosolutions SAS — Tuscany, Italy",
      period: "Oct 2021 — Jan 2023",
      bullets: [
        "Advanced mapping with ArcGIS JS API, React, OpenLayers.",
        "Enhanced MapStore support for ArcGIS feature/map/image services.",
      ],
    },
    {
      role: "ReactJS Frontend Developer (Contract)",
      company: "WeSkillz Technologies — Amman, Jordan",
      period: "Jun 2021 — Nov 2021",
      bullets: [
        "Implemented CI/CD workflows and frontend features.",
      ],
    },
    {
      role: "Full‑stack Engineer",
      company: "Oniocha — Accra, Ghana",
      period: "Jan 2018 — May 2021",
      bullets: [
        "Built request management system via SMS, email, Slack, handling thousands of requests.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <Container>
        <h2>Experience</h2>
        <div className="timeline">
          {items.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="muted">{item.company} · {item.period}</p>
                <ul>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


