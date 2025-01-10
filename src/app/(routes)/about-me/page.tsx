import Avatar from "@/components/avatar";
import Container from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

function AboutMePage() {
  return (
    <div>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl">
          Toda mi{" "}
          <span className="text-secondary font-bold">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
        <TimeLine/>
      </Container>
    </div>
  );
}

export default AboutMePage;
