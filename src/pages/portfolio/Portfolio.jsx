import React from 'react';
import { Columns, Container, Section } from 'react-bulma-components';
import Cards from '../../components/cards/Card';
import portfolioArray from '../../data/portfolioData.json';

export default function Portfolio() {
  return (
    <Section>
      <Container id="portfolio">
        <Columns breakpoint="mobile" className="features">
          {portfolioArray.map((portfolio) => (
            <Columns.Column size="quarter">
              <Cards
                key={portfolio.id}
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
