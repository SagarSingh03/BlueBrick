import React, { useState } from 'react'
import './Contact.css';
function Contact() {

  const [result, setResult] = useState(''); 

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending the messages as per your request");
    const formData = new FormData(event.target);

    formData.append("access_key", "c0ee2f16-95ea-4144-bf29-868615310154");

    const response = await fetch("https://api.web3forms.com/submit", {  // web3forms
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success){
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact">
      <div className="contact-heading">
        <strong>Contact</strong>
        <label>With US</label> <br/>  
        <p>Ready to Make a Move? Let’s Build Your <br/> Future Together</p>

        <form onSubmit={onSubmit} className="form">
          <label className="text" >Your Name</label> 
          <input className="text-reply" type="text" name = "name" placeholder="Your Name" required/>

          <label className="text">Your Email</label> 
          <input className="text-reply" type="email" name="email" placeholder="Your Email" required/>
          <br/>

          <label className="text">Message</label>
          <textarea className="text-reply" type="text" name="message" placeholder="Message" required/> <br/>
          <span>{result}</span>
        <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default Contact;







