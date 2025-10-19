import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="project">
        <Container>
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="navbar-link">Back to projects</Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="project">
      <Container>
        <h2>{project.title}</h2>
        <p className="muted" style={{ marginBottom: 20 }}>{project.description}</p>
        <img src={project.imgUrl} alt={project.title} style={{ borderRadius: 16, marginBottom: 20 }} />
        <p style={{ marginBottom: 8 }}>{project.summary}</p>
        {project.highlights && project.highlights.length > 0 && (
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {project.features && project.features.length > 0 && (
          <div style={{ marginTop: 20 }}>
            {project.features.map((f, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <strong>{f.title}:</strong> {f.description}
              </div>
            ))}
          </div>
        )}
        {project.tech && project.tech.length > 0 && (
          <ul className="skills-chips" style={{ marginTop: 12 }}>
            {project.tech.map((t, i) => (
              <li className="chip" key={i}>{t}</li>
            ))}
          </ul>
        )}
        {project.links?.live && (
          <p style={{ marginTop: 20 }}>
            <a href={project.links.live} target="_blank" rel="noreferrer" className="navbar-link">Open live</a>
          </p>
        )}
        <p style={{ marginTop: 20 }}>
          <Link to="/" className="navbar-link">← Back home</Link>
        </p>
      </Container>
    </section>
  );
}


