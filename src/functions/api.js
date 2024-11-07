import axios from "axios";

const baseUrl = "https://news-scraper-x0q1.onrender.com/api";

// <<<<< FETCH ARTICLES WITH TOPIC AND SORT QUERIES >>>>> -----
function getArticles(topic = null, sort_by = "created_at", order = "desc") {
  const params = { sort_by, order };

  if (topic) {
    params.topic = topic;
  }

  return axios
    .get(`${baseUrl}/articles`, { params })
    .then(({ data }) => {
      const articles = data.articles;
      return articles;
    })
    .catch((error) => {
      console.error("Error fetching articles from backend", error);
      throw error;
    });
}

// <<<<< FETCH AN ARTICLE BY ITS ID >>>>> -----
function getArticleById(id) {
  return axios.get(`${baseUrl}/articles/${id}`).then(({ data }) => {
    const article = data.article;
    return article;
  });
}

// <<<<< FETCH COMMENTS FOR AN ARTICLE >>>>> -----
function getCommentsByArticleId(id) {
  return axios.get(`${baseUrl}/articles/${id}/comments`).then(({ data }) => {
    const comments = data.comments;
    return comments;
  });
}

// <<<<< UPDATE VOTES ON AN ARTICLE >>>>> -----
async function updateArticleVotes(id, inc_votes) {
  const response = await axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes,
  });
  return response.data.updatedVotes;
}

// <<<<< GET ALL USERS >>>>> -----
function getUsers() {
  return axios.get(`${baseUrl}/users`).then(({ data }) => {
    const users = data.users;
    return users;
  });
}

// <<<<< GET AN INDIVIDUAL USER >>>>> -----
function getUserByUsername(username) {
  return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
    const user = data.user;
    return user;
  });
}

// <<<<< POST A NEW COMMENT >>>>> -----
async function postComment(article_id, commentData) {
  const response = await axios.post(
    `${baseUrl}/articles/${article_id}/comments`,
    commentData
  );
  return response.data.comment;
}

// <<<<< DELETE A POSTED COMMENT >>>>> -----
async function deleteComment(comment_id) {
  const response = await axios.delete(`${baseUrl}/comments/${comment_id}`);
  return response;
}

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  updateArticleVotes,
  getUsers,
  getUserByUsername,
  postComment,
  deleteComment,
};
