import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../../layout/RightSideNav";

const NewsDetails = () => {
  const newsdata = useLoaderData();
  console.log(newsdata);
  const { _id } = useParams();
  console.log(_id);
  const signleNews = newsdata.find((news) => news._id === _id);
  console.log(signleNews);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 p-10 space-y-6">
        <img src={signleNews.image_url} alt="cover" className="w-full " />
        <h2>{signleNews.title}</h2>
        <p>{signleNews.details}</p>
        <Link to={"/"}>
          <button className="btn bg-[#D72050] hover:bg-[#fa2c63] text-white">
            {" "}
            ⬅ All news in this category
          </button>
        </Link>
      </div>
      <div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsDetails;
