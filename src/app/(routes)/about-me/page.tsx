import AvatarComponent from "@/components/avatar";
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";

function AboutMePage() {
  return (
    <div>
      <TransitionPage />
      <Container>
        <AvatarComponent />
        <p>AboutMePage</p>
      </Container>
    </div>
  );
}

export default AboutMePage;
