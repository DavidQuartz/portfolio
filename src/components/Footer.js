import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className="brand-logo">David</span>
          </Col>
          <Col size={12} sm={6} padding-top={5} className="text-center text-sm-end">
            <div className="social-icon social-icon-footer">
              <a href="https://www.linkedin.com/in/davidquartz" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/davidquartz" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Instagram" /></a>
            </div>
            <p>© David Quartey</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
