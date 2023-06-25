import Link from "next/link";
import SearchForm from "./SearchForm";
import { BsList, BsHeart, BsCart3, BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=" bg-primary-color flex items-center justify-center p-5 sm:py-10">
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-3">
        <div className="flex items-center justify-center gap-2">
          {/* HAMBURGER MENU FOR MOBILE NAVIGATION */}
          <button className="sm:hidden text-white cursor-pointer hover:scale-110 duration-100">
            <BsList size={24} />
          </button>

          {/* LOGO */}
          <p className="uppercase text-white font-bold text-xl sm:text-2xl">
            E-Commerce
          </p>
        </div>

        {/* SEARCH BAR */}
        <SearchForm />

        {/* NAV */}
        <nav className="order-2 sm:order-3">
          <ul className="flex items-center justify-center gap-5 sm:gap-10">
            <li>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 text-white cursor-pointer hover:scale-110 duration-100"
              >
                <BsHeart size={18} />
                <p className="hidden sm:block">Favorites</p>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 text-white cursor-pointer hover:scale-110 duration-100"
              >
                <BsCart3 size={18} />
                <p className="hidden sm:block">Cart</p>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center justify-center text-white"
              >
                <BsPerson size={18} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
