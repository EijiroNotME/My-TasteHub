import React from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import Card from "../../Components/Card/Card";
import items from "../../../public/Data/Items";

const CategoryPage = () => {
  const { category } = useParams();

  // Filter items based on the category
  const filteredItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>
      <CategoryWrapper />

      <div className="flex flex-row gap-4 mt-4">
        {filteredItems.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
