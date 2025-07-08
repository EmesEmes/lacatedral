import AppleCarousel from "@/components/carousel";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Jobs from "@/components/jobs";
import MovingBar from "@/components/movingBar";
import Styles from "@/components/styles";
import WpButton from "@/components/wpButton";

 function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MovingBar />
      <AppleCarousel />
      {/* <Jobs /> */}
      <Cta />
      <WpButton />
      <Styles />
    </div>
  );
}
 export default Home;