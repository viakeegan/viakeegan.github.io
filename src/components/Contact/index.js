import React, {useState} from "react";
import {validateEmail, capitalizeFirstLetter} from '../../utils/helpers';

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const {name, email, message} = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      
      if (!isValid) {
        setErrorMessage('Your email is invalid')
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`)
      } else {
        setErrorMessage('');
      }
    } 

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="contactForm">
      <h2 data-testid="h1tag" className="mx-2">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit} className="mx-2">
        <div className="my-2">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} style={{width: '100%'}} />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} style={{width: '100%'}}/>
        </div>
        <div className="my-2">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" data-testid="button">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;