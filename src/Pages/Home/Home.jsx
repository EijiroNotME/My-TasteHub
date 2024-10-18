import { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import CategoryWrapper from "../Category/CategoryWrapper";
import DisplayPage from "./DisplayImage";
import FeaturedPage from "./FeaturedSection";
import LatestRecipes from "./LatestRecipes";
import NewsLetter from "./NewsLetter";
import AboutSection from "./AboutSection";
import CompanyLogo from "./CompanyLogo";
import Subscription from "./Subscription";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-center items-center w-full py-20">
        <Hero onSearch={handleSearch} />
        <CategoryWrapper />
        <section className="mt-6">
          <DisplayPage searchQuery={searchQuery} />
        </section>

        {/* Other Components */}

        <FeaturedPage />
        <LatestRecipes />
        <NewsLetter />
        <AboutSection />
        {/* <CompanyLogo /> */}
      </section>
    </div>
  );
};

export default Home;
