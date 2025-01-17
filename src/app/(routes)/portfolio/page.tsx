import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import Container from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

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
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 lg:grid-cols-4 pb-28">
          {dataPortfolio.map((data) => (
            <PortfolioBox data={data} key={data.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PortfolioPage;
