import CircleImage from "@/components/circle-image";
import SliderTestimonials from "@/components/slider-testimonials";
import TransitionPage from "@/components/transition-page";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios
          <span className="block font-bold text-secondary">
            {" "}
            de nuestros clientes
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <SliderTestimonials />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
