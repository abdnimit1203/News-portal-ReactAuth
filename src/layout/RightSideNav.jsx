import SocialLogin from "../components/SocialLogin/SocialLogin";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const RightSideNav = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <div>
        <h2 className="py-6">Find Us On</h2>
        <p className="w-full flex items-center py-4 border-y border-x  text-blue-700 center gap-4">
          <span>
            <FaFacebook  className="text-2xl ml-8"/>
          </span>{" "}
          Facebook
        </p>
        <p className="w-full flex items-center py-4 border-x  text-indigo-400 center  gap-4">
          <span>
            <FaTwitter  className="text-2xl ml-8"/>
          </span>{" "}
          Twitter
        </p>
        <p className="w-full flex items-center py-4 border-y border-x  text-rose-600 center  gap-4">
          <span>
            <FaInstagram  className="text-2xl ml-8"/>
          </span>{" "}
          Instagram
        </p>
      </div>
      <div className="bg-slate-50 mt-6 p-3">
        <h2 className="p-6 ">Q-Zone</h2>
        <img src="/qZone1.png" alt="img1" />
        <img src="/qZone2.png" alt="img2" />
        <img src="/qZone3.png" alt="img3" />
      </div>
    </div>
  );
};

export default RightSideNav;
