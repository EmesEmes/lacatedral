import BlurText from "./blurText"
import { Button } from "./ui/button"

const Cta = () => {
  return (
    <div className="bg-black">
      <section 
        className="container mx-auto mt-20 flex flex-col items-center justify-center h-[800px] bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/images/logo-letras.webp")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
      >
      <BlurText
        text="¿Tienes una idea? Permítenos hacerla realidad"
        delay={50}
        animateBy="words"
        direction="top"
        className="text-5xl mt-40 text-center text-white"
      />
      <p className="text-white text-center my-10">Ponte en contacto y te responderemos inmediatamente</p>
      <Button className="text-center my-10">Contactanos 📲</Button>
      </section>
    </div>
  )
}

export default Cta