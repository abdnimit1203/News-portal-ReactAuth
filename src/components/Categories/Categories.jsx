import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">All Category</h2>
      <h2 className="btn w-full rounded-sm">National News</h2>
      {
        categories.map((category,idx)=><Category key={idx} category={category} className></Category>)
      }
    </div>
  );
};

export default Categories;
