import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(''); // For feedback messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2rtq1g9', 'template_d2zs79r', form.current, '9Nq7Q7mYbYHZW6UQi')
      .then(
        () => {
          setStatusMessage('Your email was sent successfully!');
        },
        (error) => {
          setStatusMessage(`Failed to send email. Error: ${error.text}`);
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>

      {statusMessage && <p>{statusMessage}</p>} {/* Feedback message */}
    </div>
  );
};
