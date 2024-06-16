const Header = () => {
  return (
    <header className="bg-blue-300 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
