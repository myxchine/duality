"use server";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300  w-full text-center justify-center mt-12">
      <div className="p-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Contact Me</h2>
          <p>Email: your-email@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div>
        <p className="text-sm border-t border-gray-300 text-center p-4">
          © 2024 Michael Dos Santos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
