import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between h-24 bg-gradient-to-r from-gray-700 via-gray-300 to-gray-100 px-5 shadow-lg">
      <div className="flex items-center mt-5 sm:mt-0 lg:mt-0 sm:mb-0 sm:bg-gray-800 lg:bg-gray-800 sm:mb-4 lg:mb-4 px-4 sm:py-2 lg:py-2 rounded-md">
        <h1 className=" text-5xl sm:text-4xl lg:text:4xl font-playfair font-bold text-white">
          <span className="text-orange-500 text-5xl sm:text-4xl lg:text:4xl px-1">N</span>
          <span>ews</span>
          <span className="text-orange-500 text-5xl sm:text-4xl lg:text:4xl px-1">C</span>
          <span>entral</span>
        </h1>
      </div>

      <div className="mr-10 ml-10 hidden sm:block">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
