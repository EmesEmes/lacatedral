import React from 'react'
import BlurText from './blurText'

const Styles = () => {
  return (
    <section className='container mx-auto '>
      <BlurText
        text="Estilos"
        delay={50}
        animateBy="words"
        direction="top"
        className="text-5xl mb-20 text-center text-white"
      />
      <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1'>
      <div className='h-[700px] grid items-center' 
        style={{ backgroundImage: 'url("/images/tattoos/kami/4.webp")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'  }}
      >
        <p className='text-white text-center text-3xl'>Neotradi</p>
      </div>
      {/* <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Realismo Color</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Realismo Grises</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Japonés</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Comic</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Sombras</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Lettering</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Gran Escala</p>
      </div>
      <div className=''>
        <img src="/images/tattoos/kami/4.webp" alt="" />
        <p className='text-white text-center text-3xl'>Estilo Libre</p>
      </div> */}
      </div>
      

    </section>
  )
}

export default Styles