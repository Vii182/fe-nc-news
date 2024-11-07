const PageHeader = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-w- text-center py-6 px-4 border-b-8">
      <h1 className="text-4xl font-bold text-white mb-2">
        Welcome to <span className="text-orange-500">News Central</span>
      </h1>
      <p className="text-xl font-bold text-gray-300">
        Your one-stop hub for the latest news and articles
      </p>
      <div className="h-1 bg-orange-500 w-24 mx-auto mt-4 rounded"></div>
      <h3 className="text-2xl font-bold text-white mt-3">
        Catch up on the latest <span className="text-orange-500">News </span>
        Below:
      </h3>
    </div>
  );
};

export default PageHeader;
