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
      <p className="mx-2"><a style={{'text-decoration': 'underline'}} href="mailto:viakeegan@gmail.com">Email</a></p>
      <p className="mx-2"><a style={{'text-decoration': 'underline'}} href="https://github.com/viakeegan">GitHub</a></p>
      <p className="mx-2"><a style={{'text-decoration': 'underline'}} href="https://twitter.com/keesparc">Twitter</a></p>
    </section>
  )
}

export default ContactForm;