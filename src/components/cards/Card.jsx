import React from 'react';
import { Card, Content } from 'react-bulma-components';
import './styles.css';

export default function Cards(props) {
  return (
    <Card className="is-shady" key={props.id}>
      <Card.Image size="4by3" src={props.image} alt="project logo" />
      <Card.Content className="card-content">
        <Content className="content">
          <h4>{props.title}</h4>
          <p>{props.about}</p>
          <p>Languages: {props.languages}</p>
          <p>Technologies: {props.technologies}</p>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item
          renderAs="a"
          href={props.deployed}
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed App
        </Card.Footer.Item>

        <Card.Footer.Item
          renderAs="a"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repo
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  );
}
