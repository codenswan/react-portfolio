import React from 'react';
import { Container, Hero, Navbar } from 'react-bulma-components';
import Banner from './Tech-Base.png';
import './header.css';

export default function Header() {
  return (
    <div>
      <Hero className="is-small">
        <Hero.Body>
          <Container fluid>
            <img src={Banner} alt="banner" />
          </Container>
        </Hero.Body>
      </Hero>
      <div className="box cta">
        <Navbar.Container className="has-text-right">
          <Navbar.Menu className="nav-menu is-active" id="navMenu">
            <Navbar.Item className="nav-item" href="/about">
              {/* <Link to="/about">About | </Link> */}
              About
            </Navbar.Item>
            <Navbar.Item className="nav-item" href="/portfolio">
              Portfolio
            </Navbar.Item>
            <Navbar.Item className="nav-item" href="/contact">
              Contact
            </Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </div>
    </div>
  );
}
/* <div>

<Section class="hero is-small">
        <div class="hero-body">
            <div class="container has-text-center">
                <p class="title">
                    {/* <img src="Assets/images/Tech Base.png" alt=""> */
//                 </p>
//                 </div>
//         </div>
// </Section>
// </div> */}

// <div class="box cta">
//     <div class="container has-text-right">
//         <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//         </a>
//         <div class="nav-right nav-menu is-active" id="navMenu">
//             <a class="nav-item" href="#about">
//                 About |
//             </a>
//             <a class="nav-item" href="#portfolio">
//                 Portfolio |
//             </a>
//             <a class="nav-item" href="#contact">
//                 Contact
//             </a>
//         </div>
//     </div>
// </div>
