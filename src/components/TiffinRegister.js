import React from "react";
import "./../styles/TiffinRegister.css";

const TiffinRegister = () => {
  return (
    <div className="register-form-container">
      {/* Header */}
      <div className="form-header">
        <h2>Register as Tiffin Provider</h2>
        <p>Share your home-cooked meals with the community</p>
        <div className="progress-bar"></div>
      </div>

      {/* Personal Information */}
      <section className="form-section">
        <h3>👤 Personal Information</h3>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <div className="form-row">
          <div>
            <label>Contact Number</label>
            <input type="tel" placeholder="+1 (555) 123-4567" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="your.email@example.com" />
          </div>
        </div>

        <label>Profile Photo</label>
        <div className="photo-upload">
          <div className="photo-placeholder">
            <span role="img" aria-label="profile">👤</span>
            <p>Upload a friendly photo of yourself</p>
            <div className="photo-buttons">
              <button>📷 Take Photo</button>
              <button>⬆️ Upload</button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="form-section">
        <h3>📍 Location Details</h3>
        <div className="form-row">
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter your city" />
          </div>
          <div>
            <label>Area/Locality</label>
            <input type="text" placeholder="Enter your area/locality" />
          </div>
        </div>
        <label className="checkbox">
          <input type="checkbox" /> I offer delivery service
        </label>
      </section>

      {/* Food & Service Details */}
      <section className="form-section">
        <h3>🍱 Food & Service Details</h3>

        <label>Meals Provided</label>
        <div className="checkbox-row">
          <label><input type="checkbox" /> Breakfast</label>
          <label><input type="checkbox" /> Lunch</label>
          <label><input type="checkbox" /> Dinner</label>
          <label><input type="checkbox" /> Snacks</label>
          <label><input type="checkbox" /> Tiffin Box</label>
        </div>

        <label>Cuisine Type</label>
        <input type="text" placeholder="Eg. South Indian, Gujarati, Punjabi" />

        <div className="form-row">
          <div>
            <label>Daily Capacity</label>
            <input type="number" placeholder="Number of meals per day" />
          </div>
          <div>
            <label>Price per Meal</label>
            <input type="number" placeholder="₹ 0.00" />
          </div>
        </div>

        <label>Sample Menu</label>
        <textarea rows="4" placeholder="List items provided in a sample meal"></textarea>
      </section>

      {/* Why we collect this information */}
      <section className="info-section">
        <h4>🔍 Why we collect this information</h4>
        <ul>
          <li>To verify your identity and location</li>
          <li>To help customers find providers in their area</li>
          <li>To ensure food safety and quality standards</li>
          <li>To facilitate payments and delivery coordination</li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="complete-btn">Complete Registration ➜</button>
        <button className="draft-btn">Save as Draft</button>
        <p className="security-note">🔒 Your information is secure and encrypted</p>
      </div>
    </div>
  );
};

export default TiffinRegister;
