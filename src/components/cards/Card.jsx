import React from 'react';
import { Columns } from 'react-bulma-components';
import './styles.css';

export default function Cards(props) {
  return (
    <Columns className="features">
      <Columns.Column className="is-4">
        <div className="card is-shady" key={props.id}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={props.image} alt="project logo" id="myMVP-btn" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{props.title}</h4>
              <p>{props.about}</p>
              <p>
                <a
                  href={props.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App
                </a>
                |
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </Columns.Column>
    </Columns>
  );
}
