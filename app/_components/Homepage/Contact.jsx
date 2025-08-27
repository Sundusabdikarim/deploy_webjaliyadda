"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();
form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_2sjeg4q",       // your service ID
        "template_kk2r8cj",      // your template ID
        form.current,
        "xmOBuEiiMKofjiVUh"      // your public key
      )
      .then(
        (res) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (err) => {
          console.error(err);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <main className="contact" id="contact">
      <h5 className="contact__title">Contact Us</h5>
      <div className="contact__wrapper">
       <form ref={form} onSubmit={sendEmail} className="contact__form">
  {/* Name */}
  <label htmlFor="name" className="contact__address">Name</label>
  <input type="text" name="name" placeholder="Your name" required />

  {/* Email */}
  <label htmlFor="email" className="contact__address">Email</label>
  <input type="email" name="from_email" placeholder="Your email" required />

  {/* Phone */}
  <label htmlFor="phone" className="contact__address">Phone</label>
  <input type="text" name="phone" placeholder="Your phone" />

  {/* Subject */}
  <label htmlFor="subject" className="contact__address">Subject</label>
  <input type="text" name="title" placeholder="Subject" />

  {/* Message */}
  <label htmlFor="message" className="contact__address">Message</label>
  <textarea name="message" rows="5" placeholder="Your message" required />

  {/* Hidden Time Field */}
  <input type="hidden" name="time" />

  <button type="submit" className="contact__btn">Send Message</button>
</form>


        <div className="contact__info">
          <h5>Our Office</h5>
          <p className="contact__address">koffis Office KAYABASI MAH.AKZAMBAKSK.NO: 2M BASAKSEHIR</p>
          <p className="contact__address">Email: jaliyaddasomalidaistanbul@gmail.com</p>
          <p className="contact__address">Phone: +905521679622</p>
          <div className="contact__social">
            <h5>Follow Us</h5>
            <div className="contact__social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
