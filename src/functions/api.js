import axios from "axios";

const baseUrl = "https://news-scraper-x0q1.onrender.com/api";

function getArticles() {
  return axios.get(`${baseUrl}/articles`).then(({ data }) => {
    const articles = data.articles;
    return articles;
  });
}

function getArticleById(id) {
  return axios.get(`${baseUrl}/articles/${id}`).then(({ data }) => {
    const article = data.article;
    return article;
  });
}

function getCommentsByArticleId(id) {
  return axios.get(`${baseUrl}/articles/${id}/comments`).then(({ data }) => {
    const comments = data.comments;
    return comments;
  });
}

async function updateArticleVotes(id, inc_votes) {
  const response = await axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes,
  });
  return response.data.updatedVotes;
}

function getUsers() {
  return axios.get(`${baseUrl}/users`).then(({ data }) => {
    const users = data.users;
    return users;
  });
}

function getUserByUsername(username) {
  return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
    const user = data.user;
    return user;
  });
}

async function postComment(article_id, commentData) {
  const response = await axios.post(
    `${baseUrl}/articles/${article_id}/comments`,
    commentData
  );
  return response.data.comment;
}

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  updateArticleVotes,
  getUsers,
  getUserByUsername,
  postComment,
};
