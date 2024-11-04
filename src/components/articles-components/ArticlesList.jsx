import { useState, useEffect } from "react";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";



const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsloading] = useState(true);


    useEffect(() => {
        getArticles().then((articlesData) => {
            setArticles(articlesData);
            setIsloading(false);
        }).catch((error) => {
            console.error('Error fetching articles:', error);
            setIsloading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading articles...</p>;
    };


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
                
        </div>
    );        
};

export default ArticlesList;