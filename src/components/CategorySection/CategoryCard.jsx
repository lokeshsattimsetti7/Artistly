"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./CategoryCard.module.css";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Singer",
    label: "Singers",
    image: "/Assets/Category/singer.jpg",
    heading: "Melodic Voices:-",
    description: "Book talented singers for your next event",
  },
  {
    title: "Dancer",
    label: "Dancers",
    image: "/Assets/Category/Dancer.jpg",
    heading: "Graceful Moves:-",
    description: "Explore vibrant dance performances",
  },
  {
    title: "DJ",
    label: "DJs",
    image: "/Assets/Category/Dj.jpg",
    heading: "Spin the Beat:-",
    description: "Hire top DJs to keep the party going",
  },
  {
    title: "Speaker",
    label: "Speakers",
    image: "/Assets/Category/Speaker.jpg",
    heading: "Inspiring Talks:-",
    description: "Engage with professional speakers",
  },
];

export default function CategoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current[activeIndex]) {
      cardRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const handleLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleRight = () => {
    if (activeIndex < categories.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className={styles.MainSection}>
      <h1 className={styles.Heading}>
        <span>Browse by </span>Category
      </h1>
      <p className={styles.SubHeading}>
        All Your Favorite Performers In One Seamless Booking Platform<br></br>{" "}
        For Weddings, Parties, and Corporate Events.
      </p>

      <div className={styles.Carousel}>
        {categories.map((cat, i) => (
          <Link
            key={`${cat.title}-${i}`}
            href={`/artists?category=${cat.title}`}
            scroll={false}
          >
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className={`${styles.Card} ${
                i === activeIndex
                  ? styles.ActiveCard
                  : i === activeIndex - 1 || i === activeIndex + 1
                  ? styles.SideCard
                  : styles.HiddenCard
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.label}
                width={800}
                height={400}
                className={styles.Image}
              />

              <div className={styles.Overlay}>
                <h2 className={styles.OverlayHeading}>{cat.heading}</h2>
                <p className={styles.OverlayDescription}>{cat.description}</p>
              </div>

              <h2 className={styles.Label}>{cat.label}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.Controls}>
        <button onClick={handleLeft}>&larr;</button>
        <div className={styles.Dots}>
          {categories.map((_, i) => (
            <span
              key={i}
              className={`${styles.Dot} ${
                i === activeIndex ? styles.ActiveDot : ""
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button onClick={handleRight}>&rarr;</button>
      </div>
    </div>
  );
}
