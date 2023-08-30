// eslint-disable-next-line no-unused-vars
import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your own EmailJS service ID and template ID
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';

    // Your EmailJS user ID
    const userID = 'your_user_id';

    // Get form data
    const formData = new FormData(e.target);

    // Send email using EmailJS
    emailjs
      .sendForm(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="contact" id="contact">
      {/* Your contact form JSX */}
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* ... your form fields */}
        <div className="button-area">
          <button type="submit">
            Submit <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
