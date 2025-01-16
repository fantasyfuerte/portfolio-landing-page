import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";

function PortfolioPage() {
  return (
    <Container>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Mis ultimos{" "}
          <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>
      </div>
    </Container>
  );
}

export default PortfolioPage;
