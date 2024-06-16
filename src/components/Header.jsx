import Authentication from "./Authentication";

const Header = () => {
  return (
    <header className="bg-blue-400 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <nav className="flex space-x-4">
        <a href="/" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="/contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </nav>
      <Authentication />
    </header>
  );
};

export default Header;
