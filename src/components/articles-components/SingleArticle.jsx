import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../functions/api";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [ currArticle, setCurrArticle ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        getArticleById(article_id).then((fetchedArticle) => {
            setCurrArticle(fetchedArticle);
            setIsLoading(false);
        }).catch((error) => {
            console.error('Error fetching article:', error);
            setIsLoading(false);
        });
    }, [article_id]);


    if (isLoading) {
        return <p>Loading article...</p>;
    };
    if (!currArticle) {
        return <p>Article not found.</p>;
    }

    
    return (
        <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-10">

            <div className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img 
                    src={currArticle.article_img_url} 
                    alt={`Image of Article:${currArticle.title}`} 
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            <div className="mt-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{currArticle.title}</h1>

            <div className="text-gray-600 mb-4 flex flex-col sm:flex-row sm:items-center">
                <p className="mr-4">Author: <span className="font-semibold">{currArticle.author}</span></p>
                <p>Published: <span className="font-semibold">{new Date(currArticle.created_at).toLocaleDateString()}</span></p>
            </div>

            <p className="text-gray-800 mb-6">{currArticle.body}</p>
            <p className="text-gray-600 font-semibold">Votes: {currArticle.votes}</p>
            </div>
        </section>
    );
};

export default SingleArticle;