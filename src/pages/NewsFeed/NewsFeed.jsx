import Flicking , { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import {Fade, AutoPlay,Arrow  } from "@egjs/flicking-plugins";
const NewsFeed = () => {
  const plugins = [
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: false }),
  ];
  const plugins2 = [ new Fade(),
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),new Arrow()
  ];
  return (
    <>
      <div className="w-[40%] mx-auto bg-slate-100 py-2">
        <Flicking
          circular={true}
          moveType="freeScroll"
          bound={true}
          plugins={plugins}
        >
          <span className="button mr-2 is-white py-4 text-white rounded-xl pc-10 bg-red-400">
            🍎 Apple
          </span>
          <span className="button mr-2 is-white px-10 py-4 text-white rounded-xl bg-red-400">
            🍉 Watermelon
          </span>
          <span className="button mr-2 is-white px-10 py-4 text-white rounded-xl bg-red-400">
            🥝 Kiwi
          </span>
          <span className="button mr-2 is-white px-10 py-4 text-white rounded-xl bg-red-400">
            🍎 Apple
          </span>
          <span className="button mr-2 is-white px-10 py-4 text-white rounded-xl bg-red-400">
            🍉 Watermelon
          </span>
          <span className="button mr-2 is-white px-10 py-4 text-white rounded-xl bg-red-400">
            🥝 Kiwi
          </span>
        </Flicking>
      </div>
      <div className="w-[50%] mx-auto bg-blue-200">
        <Flicking
         circular="true"
          plugins={plugins2}
        >
          <span className="button mr-2">
            <img src="/1.png" alt="1" className="h-96"/>
          </span>
         
          <span className="button mr-2">
            <img src="/2.png" alt="2"  className="h-96"/>
          </span>
          <span className="button mr-2">
            <img src="/3.png" alt="3"  className="h-96"/>
          </span>
          <span className="button mr-2">
            <img src="/1.png" alt="1" className="h-96"/>
          </span>
         
          <span className="button mr-2">
            <img src="/2.png" alt="2"  className="h-96"/>
          </span>
          <span className="button mr-2">
            <img src="/3.png" alt="3"  className="h-96"/>
          </span>
         
          
          <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next w-40"></span>
      </ViewportSlot>
        </Flicking>
      </div>
    </>
  );
};

export default NewsFeed;
