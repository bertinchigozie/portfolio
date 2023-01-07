import React from "react";
import "../App.scss";

function Contact() {
  return (
    <div className="ContactBox">
      <div className="Contact-Contents">
        <div className="Contact-Header">
          <div className="Heading-Box">
            <h1>Contact Me</h1>
          </div>
          <div className="Paragraph-Box">
            <p>
              Hi, there, contact me to ask me about anything you have in mind
            </p>
          </div>
        </div>
        <div className="Form-Section">
          <div className="Form">
            <div className="NamesGrid">
              <div className="Names">
                <label htmlFor="first_name">First Name</label>
                <input
                  className="Contact-Name"
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="Names">
                <label htmlFor="last_name">Last Name</label>
                <input
                  className="Contact-Name"
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="EmailField">
              <label htmlFor="email">Email</label>
              <input
                className="Email"
                type="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="MessageField">
              <label htmlFor="message">Message</label>
              <textarea
                className="Message"
                name="message"
                id="message"
                placeholder="Send me a message and I will reply as soon as possible"
              ></textarea>
            </div>
            <div className="CheckboxField">
              <input className="Checkbox" type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                You agree to providing your data to Godzie who may contact you
              </label>
            </div>
            <div className="BtnField">
              <input
                className="Btn"
                type="button"
                id="btn__submit"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
