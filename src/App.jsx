import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./sections/Home";
import Articles from "./sections/Articles";
import Users from "./sections/Users";
import SingleArticle from "./components/articles-components/SingleArticle";
import Footer from "./components/Footer";
import LoginPage from "./sections/LoginPage";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
