import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards,setCards] = useState([])
    useEffect(() => {
        fetch("/news.json")
          .then((res) => res.json())
          .then((data) => setCards(data));
      }, []);
    //   console.log(cards);
    return (
        <div>
           <h2>Dragon News Home</h2> 
           {
            cards.map((card,idx)=><Card key={idx} card={card}></Card>)
           }
        </div>
    );
};

export default Cards;