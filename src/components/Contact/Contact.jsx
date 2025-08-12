import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <div className="Contact">
      <div className="contact-heading">
        <strong>Contact</strong>
        <label>With US</label> <br/>  
        <p>Ready to Make a Move? Let’s Build Your <br/> Future Together</p>

        <form className="form">
          <label className="text">Your Name</label> 
          <input className="text-reply" type="text" placeholder="Your Name" required/>

          <label className="text">Your Email</label> 
          <input className="text-reply" type="email" placeholder="Your Email" required/>
          <br/>

          <label className="text">Message</label>
          <textarea className="text-reply" type="text" placeholder="Message" required/> <br/>
        <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;





