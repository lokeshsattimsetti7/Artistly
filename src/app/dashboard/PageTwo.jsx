"use client";
import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [onboardings, setOnboardings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("onboardings")) || [];
    setOnboardings(stored);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("onboardings");
    setOnboardings([]);
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.Header}>
        <h2 className={styles.Heading}>Artist Onboarding Dashboard</h2>
        {onboardings.length > 0 && (
          <button onClick={clearAll} className={styles.ClearButton}>
            Clear All
          </button>
        )}
      </div>

      {onboardings.length === 0 ? (
        <p className={styles.Empty}>No onboarding submissions found.</p>
      ) : (
        <div className={styles.Grid}>
          {onboardings.map((artist, index) => (
            <div key={index} className={styles.Card}>
              <h3>{artist.fullName}</h3>
              <p>
                <strong>Age:</strong> {artist.age}
              </p>
              <p>
                <strong>Email:</strong> {artist.email}
              </p>
              <p>
                <strong>Phone:</strong> {artist.phone}
              </p>
              <p>
                <strong>City:</strong> {artist.city}
              </p>
              <p>
                <strong>Statement:</strong> {artist.statement}
              </p>
              <p>
                <strong>Setups:</strong> {artist.setups?.join(", ")}
              </p>
              <p>
                <strong>Band:</strong> {artist.bandName || "—"}
              </p>
              <p>
                <strong>Profession:</strong> {artist.professionType}
              </p>
              <p>
                <strong>Experience:</strong> {artist.experience}
              </p>
              <p>
                <strong>Education:</strong> {artist.education || "—"}
              </p>
              <p>
                <strong>Genres:</strong> {artist.genres?.join(", ")}
              </p>
              <p>
                <strong>Social:</strong> {artist.socialLinks}
              </p>
              <p>
                <strong>Exclusive Contract:</strong> {artist.hasContract}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
