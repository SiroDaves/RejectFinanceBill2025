"use client";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#3b82f6] text-3xl font-bold">
            #RejectFinanceBill2025
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-black transition-colors duration-300 hover:text-orange-600">ABOUT FB2025</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#reasons"><div className="text-sm text-black transition-colors duration-300 hover:text-orange-600">REASONS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#reject"><div className="text-sm text-black transition-colors duration-300 hover:text-orange-600">REJECT</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
