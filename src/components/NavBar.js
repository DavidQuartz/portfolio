import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="brand-logo">David</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => { onUpdateActiveLink('home'); scrollToSection('home'); }} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link onClick={() => { onUpdateActiveLink('skills'); scrollToSection('skills'); }} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>
                <span>Skills</span>
              </Nav.Link>
              <Nav.Link onClick={() => { onUpdateActiveLink('projects'); scrollToSection('projects'); }} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link onClick={() => { onUpdateActiveLink('experience'); scrollToSection('experience'); }} className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}>
                <span>Experience</span>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/davidquartz" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/davidquartz" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Instagram" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
