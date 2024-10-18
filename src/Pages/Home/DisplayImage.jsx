import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import items from "../../../public/Data/Items";
import NoItemsFound from "../../Error/NoItemsFound/NoItemsFound";
import SkeletonCard from "../../Components/Skeleton/SkeletonCard";

const DisplayPage = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setLoading(true); // Set loading state when searchQuery changes

    // Simulate loading time with a timeout
    setTimeout(() => {
      const filteredData = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filteredData);
      setLoading(false);
    }, 2000); // Adjust the time as necessary
  }, [searchQuery]);

  return (
    <div>
      <div className="mx-4">
        {/* Display number of items found */}
        {filteredItems.length > 0 && (
          <p className="text-secondary/80 mt-4 mb-2 font-bold">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "recipe" : "recipes"} found
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          // Use filteredItems.length to determine the number of skeletons
          Array.from(
            {
              length:
                filteredItems.length > 0 ? filteredItems.length : items.length,
            },
            (_, index) => <SkeletonCard key={index} />
          )
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item._id} item={item} />)
        ) : (
          <div className="flex items-center justify-center h-auto w-full max-w-lg col-span-4">
            <NoItemsFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayPage;
