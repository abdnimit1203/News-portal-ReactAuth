
import Cards from "../../components/Cards/Cards";
import LeftSideNav from "../../layout/LeftSideNav";
import RightSideNav from "../../layout/RightSideNav";

const Home = () => {
  return (
    <div className="grid grid-cols-4 justify-center gap-2">

      <div><LeftSideNav></LeftSideNav></div>
      <div className="col-span-2 "><Cards></Cards> </div>
      <div><RightSideNav></RightSideNav></div>
    </div>
  );
};

export default Home;
