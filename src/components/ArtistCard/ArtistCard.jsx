"use client";

import { useState } from "react";
import AskForQuoteForm from "../Form/AskForQuote";
import styles from "./ArtistCard.module.css";

export default function ArtistCard({ artist }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className={styles.CardContainer}>
      <img
        src={artist.profileImage}
        alt={artist.name}
        className={styles.ProfileImage}
      />
      <h2 className={styles.Name}>{artist.name}</h2>
      <p className={styles.Categories}>{artist.categories.join(", ")}</p>
      <p className={styles.Artist}>{artist.location}</p>
      <p className={styles.FeeRange}>{artist.feeRange}</p>

      <button
        onClick={() => setShowQuoteForm(true)}
        className={styles.QuoteButton}
      >
        Ask for Quote
      </button>

      {showQuoteForm && (
        <div className={styles.QuoteFormOverlay}>
          <div className={styles.QuoteFormContainer}>
            <button onClick={() => setShowQuoteForm(false)}>✕</button>
            <AskForQuoteForm artistName={artist.name} className={styles.Send} />
          </div>
        </div>
      )}
    </div>
  );
}
