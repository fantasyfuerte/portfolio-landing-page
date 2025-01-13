import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";

function ServicesPage() {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <Container>
        <p></p>
      </Container>
    </>
  );
}

export default ServicesPage;
