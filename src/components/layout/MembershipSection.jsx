import Headline from "../utilities/Headline";
import MembershipCards from "../utilities/MembershipCards";

const membershipContent = [
  {
    id: 1,
    headline: "Starter",
    price: "$19",
    details: ["1 book /month", "Online forums"],
    isCustom: false,
  },
  {
    id: 2,
    headline: "Pro",
    price: "$29",
    details: ["2 books /month", "Virtual meetups"],
    isCustom: false,
  },
  {
    id: 3,
    headline: "Enterprise",
    price: "Custom",
    details: ["Team access", "Private sessions"],
    isCustom: true,
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="my-15">
      <Headline className="lg:mx-auto lg:text-center text-primary-neutral-900">Membership options</Headline>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-10">
        {membershipContent.map((option) => (
          <MembershipCards key={option.id} option={option} />
        ))}
      </ul>
    </section>
  );
};

export default MembershipSection;
