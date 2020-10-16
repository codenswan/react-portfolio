import React, { useState } from 'react';
import Axios from 'axios';
import { Container, Section } from 'react-bulma-components';
import './styles.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    let url =
      'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXMCO-2c0ce7ALygdVaRSTtOcGT00ZizKONfr3y9DFKthDjQ/formResponse';

    let payload = {
      'entry.1838426375': name,
      'entry.604041197': subject,
      'entry.816631961': message,
      emailAddress: email,
    };
    //todo function to clear form once submitted
    const formData = new FormData();
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
    Axios({
      method: 'post',
      url: url,
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const inputHandler = (event) => {
    event.preventDefault();
    const handlers = {
      setMessage,
      setEmail: function (value) {
        // validate email
        // eslint-disable-next-line
        const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );

        if (!isValid) {
          console.log('Not a valid email');
        }
        setEmail(value);
      },
      setName,
      setSubject,
    };
    let inputName = event.target.name;
    inputName = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
    let inputValue = event.target.value;

    handlers[`set${inputName}`](inputValue);
  };

  return (
    <Section>
      <Container fluid className="container" id="contact">
        <div className="field">
          <label className="label">Name</label>
        </div>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onInput={inputHandler}
          />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Please add your email adderss"
              value={email}
              name="email"
              onInput={inputHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Subject"
              value={subject}
              name="subject"
              onInput={inputHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Message"
              value={message}
              name="message"
              onInput={inputHandler}
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={submitHandler}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
