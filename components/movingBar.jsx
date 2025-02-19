"use client";

import Marquee from "react-fast-marquee";


const MovingBand = () => {

  return (
    <div className="">
      <Marquee className="bg-black text-white p-8">
      <div className="flex space-x-40 text-3xl last:mr-40">
      <p>palabra 1</p>
      <p>palabra 2</p>
      <p>palabra 3</p>
      <p>palabra 4</p>
      <p>palabra 5</p>
      <p>palabra 6</p>
      </div>
    </Marquee>
    </div>
  );
};

export default MovingBand;