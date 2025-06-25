"use client";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className={styles.MainSection}>
      <Navbar />

      <div className={styles.VideoWrapper}>
        <video
          className={styles.Banner}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.Content}>
        <h1>
          Search, Select &
          <br />
          Hire <span>Top Artists.</span>
        </h1>
        <p>
          Artistly is a space where talent meets opportunity. <br></br>Join us
          and let your journey begin.
        </p>
        <button className={styles.BookButton}>Book Now</button>
      </div>
    </div>
  );
}
