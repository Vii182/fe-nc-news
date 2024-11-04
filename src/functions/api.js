import axios from 'axios';


const baseUrl = "https://news-scraper-x0q1.onrender.com/api"

function getArticles() {
    return axios.get(`${baseUrl}/articles`).then(({ data }) => {
        const articles = data.articles;
        return articles;
    });
};

function getArticleById(id) {
    return axios.get(`${baseUrl}/articles/${id}`).then(({ data }) => {
        const article = data.article;
        return article;
    });
};

export { getArticles, getArticleById };