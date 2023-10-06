import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
    const newsdata = useLoaderData()
    console.log(newsdata);
    const {_id} = useParams();
    console.log(_id);
    const signleNews =newsdata.find(news => news._id === _id)
    console.log(signleNews);

    return (
        <div className="flex flex-col border border-slate-400 rounded-xl">
            <img src={signleNews.image_url} alt="cover" className="w-60"/>
        </div>
    );
};

export default NewsDetails;