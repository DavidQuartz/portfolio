import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const skills = [
    'React.js', 'Redux', 'Node.js', 'TypeScript', 'NestJS', 'TypeORM',
    'PostgreSQL', 'CockroachDB', 'Go', 'Huma', 'Gin', 'Python', 'Flask',
    'AWS', 'GCP', 'Cloud Run', 'Workflows', 'Cloud SQL', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Cloudflare', 'Fintech'
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced across frontend, backend and cloud. Strong on scalability, accessibility, and developer experience.</p>
                        <ul className="skills-chips">
                          {skills.map((s, idx) => (
                            <li className="chip" key={idx}>{s}</li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="skills" />
    </section>
  )
}
