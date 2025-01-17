import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";

function TestimonialsPage() {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios
          <span className="block text-secondary font-bold">
            de nuestros clientes
          </span>
        </h1>
      </div>
    </>
  );
}

export default TestimonialsPage;
