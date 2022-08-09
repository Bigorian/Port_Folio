import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fu9l1oc', 'template_3vlaj6l', form.current, '0pVufxOFLJ2fjXEO1')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>thebigmaster_01@hotmail.com</h5>
            <a href="mailto:thebigmaster_01@hotmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Wittavat Sripradit</h5>
            <a href="https://m.me/wittavatbig" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <SiGmail className='contact__option-icon' />
            <h4>G-mail</h4>
            <h5>s.wittavat@gmail.com</h5>
            <a href="mailto:s.wittavat@gmail.com" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTANCT OPTION */}
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
