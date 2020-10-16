import React from 'react';
import { Container, Section } from 'react-bulma-components';
import Cards from '../../components/cards/Card';
import portfolioArray from '../../data/portfolioData.json';

export default function Portfolio() {
  return (
    <Section>
      <Container id="portfolio">
        {portfolioArray.map((portfolio) => (
          <Cards
            id={portfolio.id}
            title={portfolio.title}
            about={portfolio.about}
            languages={portfolio.languages}
            technologies={portfolio.technologies}
            image={portfolio.image}
            github={portfolio.github}
            deployed={portfolio.deployed}
          />
        ))}
      </Container>
    </Section>
  );
}
