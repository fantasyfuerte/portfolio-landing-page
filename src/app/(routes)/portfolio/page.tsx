import AvatarPortfolio from "@/components/avatar-portfolio";
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";

function PortfolioPage() {
  return (
    <Container>
      <TransitionPage />
      <AvatarPortfolio />
    </Container>
  );
}

export default PortfolioPage;
