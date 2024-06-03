const MobileMenu = () => {
  return (
    <div className="h-screen">
      <nav className="p-4">
        <ul>
          <li className="py-2 border-b">
            <a href="#home">Home</a>
          </li>
          <li className="py-2 border-b">
            <a href="#about">About</a>
          </li>
          <li className="py-2 border-b">
            <a href="#services">Services</a>
          </li>
          <li className="py-2 border-b">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
