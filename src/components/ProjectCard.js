import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, slug, tech }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={`/projects/${slug}`} className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {tech && tech.length > 0 && (
            <div className="proj-tech-stack">
              {tech.slice(0, 4).map((t, i) => (
                <span key={i} className="tech-chip">{t}</span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </Col>
  )
}
