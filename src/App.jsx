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
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen bg-gray-800">
        <Header />
        <MobileMenu />
        <div className="h-2 bg-orange-400 shadow-lg"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/topics/:topicName" element={<TopicPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <div className="h-2 bg-orange-400 shadow-lg"></div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
