import Avatar from "@/components/avatar";
import Container from "@/components/container";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";

function AboutMePage() {
  return (
    <div>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="text-secondary font-bold">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
      </Container>
    </div>
  );
}

export default AboutMePage;
