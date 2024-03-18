
import "./Header.css";

function Header() {
  return (
    <div className="bg-container flex items-center flex-col">
      <h1 className=" text-9xl text-yellow-500 mt-60 mb-8">
        Nafis <span className="text-6xl text-gray-400">furniture</span>
      </h1>
      <p className=" text-gray-400 text-lg">living room | dining room | bed room | outdoor</p>
    </div>
  );
}

export default Header;
