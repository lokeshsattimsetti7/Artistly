import Hero from "@/components/Hero/Hero";

import Styles from "@/app/artists/page.module.css";
import CategotyCard from "@/components/CategorySection/CategoryCard";

import Footer from "@/components/Footer/Footer";
import Dashboard from "./dashboard/page";
export default function Home() {
  return (
    <div>
      <Hero />

      <CategotyCard />

      <Footer />
    </div>
  );
}
