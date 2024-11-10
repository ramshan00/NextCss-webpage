'use client'
import React, { useState } from 'react';
import styles from '@/app/contact/page.module.css';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Additional form submission logic can go here, such as sending data to a server.
    setTimeout(() => setIsSubmitted(false), 5000); // Hide the popup after 5 seconds
  };

  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h2>Contact Us</h2>

        {/* Popup after submission */}
        {isSubmitted && (
          <div className={styles.popup}>
            <p>Thank you for reaching out! We’ll get back to you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          <br />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <br />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Enter your message" required></textarea>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

