import ArticlesList from "../components/articles-components/ArticlesList";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Articles = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="h-2 bg-orange-400 shadow-lg"></div>
      <div className="flex flex-1">
      <SideBar />
      <main className="ml-24 sm:ml-32 lg:ml-40 p-8 bg-gray-50 flex-grow">
      <div>
        <ArticlesList />
      </div>
      </main>
      </div>
      <div className="h-2 bg-orange-400 shadow-lg"></div>
    </section>
  );
};

export default Articles;
