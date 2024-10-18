import { GoClock } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${item._id}`);
  };

  const categoryStyles = {
    Entrees: {
      backgroundColor: "#d4e8d4",
      color: "#59871f",
    },
    Breakfast: {
      backgroundColor: "#fffacd",
      color: "#756C1A",
    },
    Lunch: {
      backgroundColor: "#ffe8cc",
      color: "#d67d2b",
    },
    Desserts: {
      backgroundColor: "#d8e8ff",
      color: "#5971a8",
    },
    Sides: {
      backgroundColor: "#e6d6f7",
      color: "#7159a8",
    },
    Drinks: {
      backgroundColor: "#f7d6d6",
      color: "#a83f3f",
    },
  };

  return (
    <div
      className="relative h-96 w-[19rem] flex flex-col justify-between bg-primary shadow-lg shadow-secondary/30 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer group"
      onClick={handleClick}
    >
      <p className="absolute top-2 right-2 px-4 py-2 text-secondary bg-primary rounded-md font-semibold">
        {item.more.difficulty}
      </p>
      <img
        src={item.thumbnail_image}
        alt={item.name}
        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="px-6 py-4 flex-grow">
        <h2 className="text-xl font-bold mt-4 text-secondary">{item.name}</h2>
      </div>
      <div className="w-full flex px-6 py-4 justify-between">
        <button
          className="p-2 rounded-lg font-medium transition-colors duration-300"
          style={categoryStyles[item.category]}
        >
          {item.category}
        </button>
        <div className="flex items-center">
          <GoClock className="w-5 h-5 mx-1" />
          <p>{item.more.cook_time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
