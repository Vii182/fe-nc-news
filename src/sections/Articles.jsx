import ArticlesList from "../components/articles-components/ArticlesList";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MobileMenu from "../components/MobileMenu";

const Articles = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="h-2 bg-orange-400 shadow-lg"></div>
      <div className="flex-grow flex">
        <div className="hidden sm:block bg-gray-800 w-24 sm:w-32 lg:w-40 p-2">
      <SideBar />
        </div>
      <main className="flex-1  bg-gray-50">
        <ArticlesList />      
      </main>
      </div>
      <div className="h-2 bg-orange-400 shadow-lg"></div>
    </section>
  );
};

export default Articles;
