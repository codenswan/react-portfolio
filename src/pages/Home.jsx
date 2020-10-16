import React from 'react';
import { Container, Section } from 'react-bulma-components';
import './styles.css';
import Photo from './circle-cropped.png';

export default function () {
  return (
    <Section>
      <Container>
        <div id="profile-pic">
          <img src={Photo} alt="profile pic" />
        </div>
        <div id="bio">
          <article id="bio-text">
            <p>
              In 2020 I started the process to become a web developer through an
              intensive 6 month bootcamp by Sydney Uni and Trilogy Education.
              This was a difficult but rewarding journey as I had no background
              in the technology industry. The bootcamp’s hands-on approach to
              learning has provided lots of practical experience with HTML, CSS
              and Javascript as well as MERN stack. I love web development and
              want to keep getting better. I enjoy problem solving. I love
              javascript. I appreciate creativity.
            </p>
            <br />
            <p>
              I’ve cared for people in churches and local communities in NSW and
              QLD. I’ve gained experience in public speaking and honed my
              interpersonal communication skills. I’ve learnt to actively listen
              to people and understand their perspective. I’ve developed
              research and writing skills. I’ve organised community welfare
              projects like “soup kitchens” and youth support. I’ve gained
              managerial and leadership experience, overseeing teams of
              volunteers for community oriented projects.
            </p>
            <br />
            <p>
              My main motivation for web development is to keep learning as much
              as I can about building websites and apps that help people and
              businesses achieve their goals. What I’ve learnt through my
              bootcamp is that the web has become an indispensable and in many
              ways unavoidable aspect of modern life. Most people don’t know how
              to create web sites and build an online presence for their
              organisation, clubs or businesses. I’d like to work with an
              organisation where I can keep learning and enhancing my
              development skills.
            </p>
            <br />
            <p>
              I can be contacted by phone on 0448405814 or by email at{' '}
              <a
                href="mailto:rodger.swan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                rodger.swan@gmail.com.
              </a>
            </p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
