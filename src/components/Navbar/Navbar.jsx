"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <h1 className={styles.LogoText}>ARTISTLY</h1>
      </div>

      <button
        className={styles.Hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`${styles.Bar} ${menuOpen ? styles.Bar1Open : ""}`}
        ></span>
        <span
          className={`${styles.Bar} ${menuOpen ? styles.Bar2Open : ""}`}
        ></span>
        <span
          className={`${styles.Bar} ${menuOpen ? styles.Bar3Open : ""}`}
        ></span>
      </button>

      <nav className={`${styles.SectionTwo} ${menuOpen ? styles.Open : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/book-celebrities" onClick={() => setMenuOpen(false)}>
              Booking
            </Link>
          </li>
          <li>
            <Link href="/category" onClick={() => setMenuOpen(false)}>
              Category
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.SectionThree}>
        <Link href="/ArtistOnboarding">
          <button type="button">ARTIST ONBOARDING</button>
        </Link>
        <Link href="/dashboard">
          <button type="button">DASH BOARD</button>
        </Link>
      </div>
    </header>
  );
}
