import styles from "./AskForQuote.css";
import React, { useState } from "react";

export default function AskForQuoteForm({ artistName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    eventType: "",
    artistName: artistName || "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    const updatedQuotes = [...existingQuotes, formData];

    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));

    console.log("Form data saved to localStorage:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      location: "",
      eventType: "",
      artistName: artistName || "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.MainSection}>
      <h2 className={styles.Header}>Ask for a Quote</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="input"
      />
      <input
        type="date"
        name="date"
        required
        value={formData.date}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="location"
        placeholder="City / Location"
        required
        value={formData.location}
        onChange={handleChange}
        className="input"
      />
      <select
        name="eventType"
        required
        value={formData.eventType}
        onChange={handleChange}
        className="input"
      >
        <option value="">Select Event Type</option>
        <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Corporate">Corporate</option>
      </select>

      <input
        type="text"
        name="artistName"
        value={formData.artistName}
        readOnly
        className="input bg-gray-100"
      />

      <textarea
        name="description"
        placeholder="Describe your event or any special requirements"
        value={formData.description}
        onChange={handleChange}
        className="input"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Request Quote
      </button>
    </form>
  );
}
