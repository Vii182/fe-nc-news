import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./sections/Home";
import Articles from "./sections/Articles";
import SingleArticle from "./components/articles-components/SingleArticle";
import Footer from "./components/Footer";
import LoginPage from "./sections/LoginPage";
import { UserProvider } from "./context/UserContext";
import TopicPage from "./components/articles-components/TopicPage";

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:topicName" element={<TopicPage />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
