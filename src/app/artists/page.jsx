"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import Singers from "@/data/singers.json";
import Dancers from "@/data/dancers.json";
import Djs from "@/data/djs.json";
import Speakers from "@/data/Speaker.json"; // ✅ FIX: correct casing
import ArtistCard from "@/components/ArtistCard/ArtistCard";
import Styles from "@/app/artists/page.module.css";

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [category]);

  const categoryMap = {
    Singer: Singers,
    Dancer: Dancers,
    DJ: Djs,
    Speaker: Speakers,
  };

  const artistData = category
    ? categoryMap[category] || []
    : [...Singers, ...Dancers, ...Djs, ...Speakers];

  return (
    <div className={Styles.MainSection}>
      <h1 className={Styles.Heading}>Book Top Talent For Your Next Event</h1>
      <p className={Styles.SubHeading}>
        Browse and book verified artists, DJs, bands, and performers — fast,
        easy, and secure.
      </p>

      {artistData.length === 0 ? (
        <p className={Styles.NoArtists}>
          No artists found for category: <strong>{category}</strong>
        </p>
      ) : (
        <div className={Styles.ArtistGrid}>
          {artistData.map((artist, index) => (
            <div key={index} className={Styles.ArtistCardContainer}>
              <ArtistCard artist={artist} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
