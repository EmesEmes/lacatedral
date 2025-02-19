import Hero from "@/components/hero";
import Jobs from "@/components/jobs";
import MovingBar from "@/components/movingBar";
 function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MovingBar />
      <Jobs />
    </div>
  );
}
 export default Home;