"use client";
import Navbar from "@/components/Navbar/Navbar";
import ArtistForm from "@/components/Form/ArtistForm";
import Styles from "@/app/artists/page.module.css";

export default function ArtistOnboardingPage() {
  return (
    <>
      <main>
        <ArtistForm />
      </main>
    </>
  );
}
