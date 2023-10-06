import Marquee from "react-fast-marquee";
const BannerSlider = () => {
    return (
        <div className="w-[90%] bg-gray-100 mx-auto rounded-sm p-3 font-poppins flex gap-2 justify-center items-center md-6 md:pr-16">
            <button className="btn bg-[#D72050] hover:bg-[#c71243] text-white font-semibold px-6 rounded-sm">Latest</button>
            <Marquee pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Argentina vs France — as it happened   
            </Marquee>
        </div>
    );
};

export default BannerSlider;