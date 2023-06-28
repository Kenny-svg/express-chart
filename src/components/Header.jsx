import image from "../assets/logo.svg";
const Header = () => {
  return (
    <>
      <header>
        <nav className="flex bg-red-400 w-full p-3 rounded-md md:gap-40">
          <div className="text-left">
            <p className="text-sm text-gray-100">My balance</p>
            <p className="font-bold text-xl text-gray-100">$921.33</p>
          </div>
          <div>
            <img src={image} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
