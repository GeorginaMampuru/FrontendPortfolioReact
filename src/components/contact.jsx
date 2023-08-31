// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';// eslint-disable-next-line no-unused-vars
import './Contact.css';
import '../App.css'; // Make sure to replace with your actual component CSS file

import emailjs from '@emailjs/browser';

  

const Contact = () => {


    const form = useRef();

  // eslint-disable-next-line no-unused-vars
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wloglyp', 'template_8y0rznn', form.current, 'Bwm5Pu7SHOLV3EAxk')
      .then((result) => {
          console.log(result.text);
          alert('Message submitted successfully!');
      }, (error) => {
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
          <form
            ref={form} onSubmit={sendEmail}
          >
            <div className="form-group">
              {/* ... rest of the form content */}
              <div className="field">
                <input type="text" name="user_name" placeholder="Name" required />
                <i className='fas fa-user'></i>

              </div>
              <div className="field">
                <input type="text" name="user_email" placeholder="Email" required />
                <i className='fas fa-envelope'></i>
              </div>
              {/* <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className='fas fa-phone-alt'></i>
              </div> */}
              <div className="message">
                <textarea placeholder="Message" name="message" required></textarea>
                <i className="fas fa-comment-dots"></i>
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
