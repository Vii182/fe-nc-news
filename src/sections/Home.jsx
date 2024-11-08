import { useState, useEffect } from "react";
import SliderTop from "../components/home-components/SliderTop";
import { getLatestArticles } from "../functions/api";
import PageHeader from "../components/home-components/PageHeader";
import TopicsElement from "../components/home-components/TopicsElement";
import FeaturedArticle from "../components/home-components/FeaturedArticle";

// <<<<< HOME PAGE COMPONENT >>>>> ------
const Home = () => {

  // <<<<< LATEST ARTICLE COMPONENT USESTATES >>>>> ------
  const [latestArticles, setLatestArticles] = useState([]);
  // <<<<< FEATURED ARTICLE COMPONENT USESTATES >>>>> ------
  const [featuredArticle, setFeaturedArticle] = useState(null);

  // <<<<< FETCH REQUIRED ARTICLES >>>>> ------
  useEffect(() => {
    getLatestArticles().then((articles) => {
      // <<<<< AUTO SHOWS 3 LATEST ARTICLES -----
      setLatestArticles(articles.slice(0, 3));
      // <<<<< FEATURED ARTICLE BASED ON INDEX POSITION -----
      setFeaturedArticle(articles[24]);
  }).catch((error) => console.error("Error Displaying Latest Articles:", error));
  }, []);

  // <<<<< MAIN RETURN >>>>> ------
  return (
    <div>
      <PageHeader />
      <SliderTop articles={latestArticles} />
      <TopicsElement />
      {featuredArticle ? (
        <FeaturedArticle article={featuredArticle} />
      ) : (
        <p>Loading featured article...</p> 
      )}
    </div>
  )
};

export default Home;
