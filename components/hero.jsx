"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Animación para mostrar el menú
        gsap.to(menuRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });
      } else {
        // Animación para ocultar el menú
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -100,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {/* Video de fondo */}
      <video
        src="/videos/sample.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover contrast-200"
      ></video>

      {/* Texto centrado */}
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl">
        ejemplo
      </h1>

      {/* Menú */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full p-6 bg-black bg-opacity-80 opacity-0 -translate-y-full z-10"
      >
        <div className="flex justify-between items-center container mx-auto">
        <div>
          <Image src={"/images/logo-blanco.png"} alt="Logo la catedral" width={60} height={60}/>
        </div>
        <div>
          <ul className="flex justify-center space-x-8 text-white">
            <li><Link href={"/"}>Inicio </Link></li>
            <li>Studio</li>
            <li>Trabajos</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
