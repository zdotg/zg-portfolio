import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div class="contact-section py-5">
      <h2 class="main-text text-center">Contact Me</h2>
      <div class="card main-text">
        <div class="card-body">
          <form
            class="form-text"
            action="https://formsubmit.co/zach.ecab@gmail.com"
            method="POST"
          >
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                id="name"
                required
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                placeholder="Message"
                style={{ height: 10 + "rem" }}
              ></textarea>
            </div>
            <button type="submit" class="btn button-gradient submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
