import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer hidden sm:flex items-center h-10 rounded-md flex-grow">
          <input
            type="text"
            className="p-2 h-full flex-shrink rounded-l-md focus:outline-none w-6 flex-grow"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p> Hello User!</p>
            <p className="font-extrabold md:text-sm"> Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns </p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 p-l-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Prime Buisness</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
