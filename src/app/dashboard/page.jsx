"use client";
import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import PageTwo from "./PageTwo";

export default function Dashboard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(storedQuotes);
  }, []);

  const clearQuotes = () => {
    localStorage.removeItem("quotes");
    setQuotes([]);
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.Header}>
        <h2 className={styles.Heading}>Dashboard</h2>
        {quotes.length > 0 && <button onClick={clearQuotes}>Clear All</button>}
      </div>

      {quotes.length === 0 ? (
        <p>No quote requests submitted yet.</p>
      ) : (
        <div className={styles.QuoteList}>
          <h2 className={styles.Heading}>Quote Dashboard</h2>
          {quotes.map((quote, index) => (
            <div key={index}>
              <h3>{quote.artistName}</h3>
              <div>
                <p>
                  <span>Name:</span> {quote.name}
                </p>
                <p>
                  <span>Email:</span> {quote.email}
                </p>
                <p>
                  <span>Phone:</span> {quote.phone}
                </p>
                <p>
                  <span>Date:</span> {quote.date}
                </p>
                <p>
                  <span>Location:</span> {quote.location}
                </p>
                <p>
                  <span>Event:</span> {quote.eventType}
                </p>
                <p>
                  <span>Details:</span> {quote.description || "—"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <PageTwo />
    </div>
  );
}
