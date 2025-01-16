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
    </Container>
  );
}

export default PortfolioPage;
