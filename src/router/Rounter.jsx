import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Registration from "../pages/Registration/Registration";
import Error404 from './../pages/Error404/Error404';
import Login from './../pages/Login/Login';
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PrivateRouter from "./PrivateRouter";

export const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error404></Error404>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader: ()=> fetch(`news.json`),
        },
        {
          path: "/about",
          element: <NewsFeed/>
        },
        {
          path: "/login",
          element: <Login/> ,
        },
        {
          path: "/register",
          element: <Registration/>
  
        },
        {
          path: "/update-profile",
          element: <UpdateProfile/>
  
        },
        {
          path: "/:_id",
          element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
          loader: ()=>fetch(`/news.json`)
        }
      ],
    },
  ]);