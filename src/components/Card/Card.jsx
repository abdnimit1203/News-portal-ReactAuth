/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsBookmark, BsShare, BsFillEyeFill } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const [readmore, setReadmore] = useState(false);
  const { author, title, image_url, rating, details, total_view, _id } =
    card;
  const details1 = details.slice(0, 100);

  const handleReadmore = (e) => {
    e.preventDefault();
    setReadmore(!readmore);
  };

  return (
    <div className="my-4 border-2 border-[#F3F3F3] ">
      <Link to={`/${_id}`}>
        <div className="bg-[#F3F3F3]">
          <div className="flex justify-between p-4 items-center">
            <div className="flex justify-center items-center gap-2">
              <div>
                <img src={author.img} alt="dp" className="w-8 rounded-xl" />
              </div>

              <div>
                <p>{author.name}</p>
                <p>{author?.published_date?.slice(0, 10)}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span>
                <BsBookmark />
              </span>
              <span>
                <BsShare />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <p className="font-bold text-lg">{title}</p>
          <img src={image_url} alt="cover" />
          <p className="text-ellipsis max-w-fit  whitespace-wrap overflow-hidden">
            {!readmore ? `${details1}` : `${details}`}
           
          </p>
          <span
              onClick={handleReadmore}
              className="  text-amber-500 font-semibold cursor-pointer"
            >
              {!readmore ? "Read more" : "Read less"}
            </span>
        </div>
        <hr />
        <div className="flex justify-between p-3">
          <p className="flex items-center gap-2">
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FF8C47"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FF8C47"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={rating.number}
              readonly
            />
            {rating.number}
          </p>
          <span
            className="flex
        gap-2 items-center"
          >
            <BsFillEyeFill /> {total_view}
          </span>
        </div>
        </Link>
    </div>
  );
};

export default Card;
