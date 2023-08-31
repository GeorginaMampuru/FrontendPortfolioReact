// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import '../App.css';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wloglyp', 'template_8y0rznn', form.current, 'Bwm5Pu7SHOLV3EAxk')
      .then((result) => {
        console.log(result.text);
        alert('Message submitted successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('An error occurred. Message not submitted.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="./contact1.png" alt="" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="field">
                <input type="text" name="user_name" placeholder="Name" required />
                <i className='fas fa-user'></i>
              </div>
              <div className="field">
                <input type="text" name="user_email" placeholder="Email" required />
                <i className='fas fa-envelope'></i>
              </div>
              <div className="message">
                <textarea placeholder="Message" name="message" required></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
              {/* Add reCAPTCHA */}
              <div className="recaptcha-container">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(value) => {
                    console.log('reCAPTCHA verified:', value);
                  }}
                />
              </div>
            </div>
            <div className="button-area">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
