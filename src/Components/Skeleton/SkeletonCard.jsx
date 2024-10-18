import React from "react";

const SkeletonCard = () => {
  return (
    <div className="relative h-96 w-[19rem] flex flex-col justify-between bg-gray-200 shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="absolute top-2 right-2 px-4 py-2 bg-gray-300 rounded-md w-24 h-8"></div>
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="px-6 py-4 flex-grow">
        <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded-md"></div>
      </div>
      <div className="w-full flex px-6 py-4 justify-between">
        <div className="p-2 rounded-lg bg-gray-300 w-20 h-8"></div>
        <div className="flex items-center">
          <div className="w-5 h-5 mx-1 bg-gray-300 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
