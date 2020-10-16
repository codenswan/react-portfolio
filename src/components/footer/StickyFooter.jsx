import React from 'react';
import { Footer } from 'react-bulma-components';
import './footer.css';
import LinkedIn from './linkedin.png';
import Github from './logo.png';
import Gmail from './gmail.png';
import CV from './curriculum.png';

export default function StickyFooter() {
  return (
    <Footer>
      <div className="content has-text-centered">
        <div className="control level-item">
          <a
            id="logos"
            href="https://www.linkedin.com/in/daniel-swan-a6776a1a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
          <a
            id="logos"
            href="https://github.com/codenswan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github logo" />
          </a>
          <a
            id="logos"
            href="mailto:rodger.swan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Gmail} alt="gmail logo" />
          </a>
          <a
            id="logos"
            href="https://docs.google.com/document/d/1nxJ8aWjJsQFZNKgYhfFdsruGgnhZhAoaA6WM3_QexlY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CV} alt="cv logo" />
          </a>
        </div>
        <div className="control level-item">
          <a
            href="https://bulmatemplates.github.io/bulma-templates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tags has-addons">
              <p>
                Inspiration for Bulma modals from{' '}
                <span className="tag is-dark">Bulma Templates.</span>
              </p>
            </div>
          </a>
        </div>
        <div className="control level-item">
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            title="Pixel perfect"
            rel="noopener noreferrer"
          >
            {' '}
            Pixel perfect{' '}
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            title="Flaticon"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    </Footer>
  );
}
