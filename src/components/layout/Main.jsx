import FeaturesSection from "./FeaturesSection";
import JourneySection from "./JourneySection";
import MembershipSection from "./MembershipSection";
import TestimonialSection from "./TestimonialSection";
import Container from "../shared/Container";

const Main = () => {
  return (
    <main>
      <Container>
        <FeaturesSection />
        <JourneySection />
        <MembershipSection />
        <TestimonialSection />
      </Container>
    </main>
  );
};

export default Main;
