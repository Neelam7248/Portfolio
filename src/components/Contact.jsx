import React from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact text-center">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">Let's connect! I'd love to hear from you.</p>

      <div className="contact-info">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p><strong>Email:</strong> kausarneelam@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <p><strong>City:</strong> Lahore, Pakistan</p>
        </div>
      </div>

      <p className="footer-note">© 2025 Neelam Kausar | All Rights Reserved</p>
    </section>
  );
};

export default Contact;
