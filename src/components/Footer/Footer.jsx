"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.MainSection}>
      <div className={styles.SectionONE}>
        <ul>
          <h3>Quick Links</h3>
          <li>Why Live 101</li>
          <li>Contact Us</li>
          <li>Our Clients</li>
          <li>Blogs</li>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>Refund Policy</li>
        </ul>

        <ul>
          <h3>Artist Locations</h3>
          <li>Artist In Mumbai</li>
          <li>Artist In Delhi</li>
          <li>Artist In Bangalore</li>
          <li>Artist In Pune</li>
          <li>Artist In Hyderabad</li>
          <li>Artist In Gurugram</li>
          <li>Artist In Goa</li>
        </ul>

        <ul>
          <h3>Entertainment</h3>
          <li>Singers</li>
          <li>DJs</li>
          <li>Music Bands</li>
          <li>Musicians</li>
          <li>Anchors / Emcees</li>
          <li>Dance Groups</li>
          <li>Celebrities</li>
          <li>Comedians</li>
        </ul>

        <ul>
          <h3>Events</h3>
          <li>Private Events</li>
          <li>Weddings</li>
          <li>House Parties</li>
          <li>Corporate Events</li>
          <li>Café & Lounges</li>
          <li>Social Events</li>
          <li>Hotels & Villas</li>
          <li>Virtual Events</li>
        </ul>
      </div>

      <hr className={styles.Divider} />

      <div className={styles.SectionTwo}>
        <p>© 2025 Lokesh Globe Pvt. Ltd. | All Rights Reserved.</p>
      </div>
    </footer>
  );
}
