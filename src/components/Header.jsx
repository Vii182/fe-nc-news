import NavBar from "./NavBar";




const Header = () => {
    return (
        <section className="flex items-center justify-between h-16 bg-gray-600 pl-10">
            <h1 className=" text-2xl">
                <span>A</span><span>rticle</span><span> C</span><span>entral</span>
            </h1>
            <div className="mr-10">
                <NavBar />
            </div>
        </section>
    )
}

export default Header;