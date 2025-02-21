import AppleCarousel from "@/components/carousel";
import Hero from "@/components/hero";
import Jobs from "@/components/jobs";
import MovingBar from "@/components/movingBar";
 function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MovingBar />
      <AppleCarousel />
      <Jobs />
    </div>
  );
}
 export default Home;