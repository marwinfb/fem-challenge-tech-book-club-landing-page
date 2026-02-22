import assets from "../../assets/assets";
import Button from "../utilities/Button";
import DescriptionText from "../utilities/DescriptionText";

const MembershipCards = ({ option }) => {
  return (
    <li className={`border border-primary-neutral-200 p-6 rounded-lg space-y-6 md:flex-1 ${option.headline === "Pro" ? "bg-primary-neutral-100 lg:py-10" : "bg-primary-neutral-000"}`}>
        <h3 className="headline-sm text-primary-neutral-900">{option.headline}</h3>
        <p className="flex items-center gap-2">
          <span className="headline-lg text-primary-neutral-900">
            {option.price}
          </span>
          {!option.isCustom && <span className="paragraph">/month</span>}
        </p>
        <hr className="border-primary-neutral-200" />
        <ul className="space-y-4 ">
          {option.details.map((detail, index) => (
            <li key={index} className="flex items-center gap-3.5">
              <img src={assets.iconCheckSvg} alt="" className="w-7 h-7" />
              <DescriptionText>{detail}</DescriptionText>
            </li>
          ))}
        </ul>
        <Button>{option.isCustom ? "Talk to us" : "Subscribe now"}</Button>
    </li>
  );
};

export default MembershipCards;
