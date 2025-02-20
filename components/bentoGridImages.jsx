import React from 'react';

const BentoGridImages = ({color = "bg-black", name, fullName}) => {
  return (
    <div className={`w-screen h-screen relative ${color}`}>
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-8">
        {/* Contenedores de imágenes */}
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/1.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/2.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/3.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/4.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/5.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="col-span-2 row-span-2 border-2 border-white overflow-hidden rounded-xl relative flex justify-center items-end">
          <img
            src={`/images/tattoos/${name}/image.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <p className='text-white absolute mb-10 text-5xl'>{fullName}</p>
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/7.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/8.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/9.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/10.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/11.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/12.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="border-2 border-white overflow-hidden rounded-xl">
          <img
            src={`/images/tattoos/${name}/6.webp`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGridImages;