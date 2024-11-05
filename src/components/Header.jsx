import NavBar from "./NavBar";

const Header = () => {
  return (
    <section className="flex items-center justify-between h-24 bg-gradient-to-r from-gray-700 via-gray-300 to-gray-100 px-5 shadow-lg">
      <div className="bg-gray-800 px-4 py-2 rounded-md">
        <h1 className=" text-4xl font-playfair font-bold text-white">
          <span className="text-orange-500 text-4xl px-1">N</span>
          <span>ews</span>
          <span className="text-orange-500 text-4xl px-1">C</span>
          <span>entral</span>
        </h1>
      </div>

      <div className="mr-10">
        <NavBar />
      </div>
    </section>
  );
};

export default Header;
