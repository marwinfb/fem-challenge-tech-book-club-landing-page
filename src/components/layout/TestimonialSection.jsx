import React from "react";
import Container from "../shared/Container";
import StarRatings from "../utilities/StarRatings";

const TestimonialSection = () => {
  return (
    <section className="my-15">
      <StarRatings />
      <figure className="mt-8 space-y-8 lg:text-center max-w-180 mx-auto">
        <blockquote className="headline-sm  text-primary-neutral-900">This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!</blockquote>
        <footer>
          <cite className="paragraph font-secondary">Sarah Chen, Software Architect</cite>
        </footer>
      </figure>
    </section>
  );
};

export default TestimonialSection;
