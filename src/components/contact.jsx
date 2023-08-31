// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contact.css';
import '../App.css'; // Make sure to replace with your actual component CSS file

const Contact = () => {
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
            // id="contact-form"
            // action="https://docs.google.com/spreadsheets/d/1KUssHYsV9dL2HP_iVuGJuoUwPSWVEcXivH7LhqKDwPE/edit#gid=0"
            // method="POST"
          >
            <div className="form-group">
              {/* ... rest of the form content */}
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className='fas fa-user'></i>

              </div>
              <div className="field">
                <input type="text" name="email" placeholder="Email" required />
                <i className='fas fa-envelope'></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className='fas fa-phone-alt'></i>
              </div>
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
