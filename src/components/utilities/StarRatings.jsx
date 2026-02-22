import assets from "../../assets/assets";

const StarRatings = ({ count = 5}) => {
  return (
    <div className="flex items-center lg:justify-center">
      {[...Array(count)].map((_, index) => (
        <img key={index} src={assets.iconStarSvg} alt="" className="size-6" />
      ))}
    </div>
  );
};

export default StarRatings;
