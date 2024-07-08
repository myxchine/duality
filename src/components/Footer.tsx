import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-12  text-white">
      <div className="flex flex-col items-center justify-between gap-4 text-xs ">
        <p>&copy; 2024 WE BUILD WEBSITES. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline ">
            Home
          </Link>
          <Link href="/portfolio" className="hover:underline ">
            Portfolio
          </Link>
          <Link href="/packages" className="hover:underline ">
            Packages
          </Link>
          <Link href="/reserve" className="hover:underline ">
            Reserve
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
