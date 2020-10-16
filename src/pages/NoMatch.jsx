import React from "react";
import { Container, Section } from "react-bulma-components";

function NoMatch() {
  return (
    <Section>
      <Container fluid>
              <h1>404 Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
      </Container>
    </Section>
  );
}

export default NoMatch;
