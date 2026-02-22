import assets from "../../assets/assets";
import StarRatings from "./StarRatings";

const Users = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={assets.imageAvatarsWebp} alt="Users" width={110} height={40} />
      <div className="flex items-start flex-col gap-1">
        <StarRatings />
        <p className="headline text-left">200+ developers joined already</p>
      </div>
    </div>
  );
};

export default Users;
