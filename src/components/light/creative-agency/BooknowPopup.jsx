import React, { useState } from "react";
import "./externalCSS/BooknowPopup.css";

const BooknowPopup = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log(formData);
    closePopup(); // Close the popup after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={closePopup} className="close-button" aria-label="Close Popup">&times;</button>
        <h2>Book a Call</h2>
        <form onSubmit={handleSubmit}>
          <div className="messages"></div>
          <div className="controls row">
            <div className="col-lg-6">
              <div className="form-group mb-30">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-30">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-30">
                <button
                  type="submit"
                  className="butn butn-full butn-bord radius-30"
                >
                  <span className="text">Let&apos;s Talk</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BooknowPopup;
