import { HeroSection, LatestArrival } from "@/components/Pages/Home";
import { NewArrivalSection } from "@/components";

import style from "./page.module.scss";

const { home } = style;

const Home = () => {
  return (
    <main>
      <HeroSection/>
      <LatestArrival/>
      <NewArrivalSection/>
    </main>
  );
}

export default Home;
