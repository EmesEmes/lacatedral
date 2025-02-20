"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./blurText";
import BentoGridImages from "./bentoGridImages";

gsap.registerPlugin(ScrollTrigger);

const Jobs = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const container = scrollContainer.current;
    const sections = container.children;
    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: () => - (totalWidth - window.innerWidth), // Desplaza a la izquierda
      ease: "power1.out",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`, // Finaliza después de recorrer todo el ancho
        pin: true, // Fija el contenedor en la pantalla
        scrub: 1, // Movimiento suave
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div className="mx-auto text-white mt-10 overflow-hidden">
      <BlurText
        text="Nuestros Artistas"
        delay={50}
        animateBy="words"
        direction="top"
        className="text-5xl mb-8 text-center"
      />
      {/* Contenedor del scroll horizontal */}
      <div ref={scrollContainer} className="flex w-[400vw] h-screen">
        <BentoGridImages  color="bg-indigo-700" name="marlon" fullName="Marlón"/>
        <BentoGridImages  color="bg-red-500" name="kami" fullName="Kami"/>
        <BentoGridImages  color="bg-green-950" name="marlon" fullName="Marlón"/>
        <BentoGridImages  color="bg-blue-900" name="kami" fullName="Kami"/>
      </div>
      <div className="h-screen w-screen ">

      </div>
    </div>
  );
};

export default Jobs;
