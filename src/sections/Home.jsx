import { useState, useEffect } from "react";
import SliderTop from "../components/home-components/SliderTop";
import { getLatestArticles } from "../functions/api";
import PageHeader from "../components/home-components/PageHeader";
import TopicsElement from "../components/home-components/TopicsElement";
import FeaturedArticle from "../components/home-components/FeaturedArticle";


const Home = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);

  useEffect(() => {
    getLatestArticles().then((articles) => {
      // <<<<< AUTO SHOWS 3 LATEST ARTICLES -----
      setLatestArticles(articles.slice(0, 3));
      // <<<<< FEATURED ARTICLE BASED ON INDEX POSITION -----
      setFeaturedArticle(articles[24]);
  }).catch((error) => console.error("Error Displaying Latest Articles:", error));
  }, []);

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
