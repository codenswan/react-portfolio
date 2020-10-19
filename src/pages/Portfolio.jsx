import React from 'react';
import { Columns, Container, Section } from 'react-bulma-components';
import Cards from '../components/cards/Card';
import portfolioArray from '../data/portfolioData';

export default function Portfolio() {
  return (
    <Section>
      <Container id="portfolio">
        <Columns className="features">
          {portfolioArray.map((portfolio) => (
            <Columns.Column size="one-quarter" key={portfolio.id}>
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
            </Columns.Column>
          ))}
        </Columns>
      </Container>
    </Section>
  );
}
