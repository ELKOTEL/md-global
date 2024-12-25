import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Electronics",
      link: "/#",
    },
  ];
  
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

const Navbar = () => {
  return (
    <div className="bg-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div>
          <div className="bg-black text-white py-2 flex items-center gap-2 justify-center">
            <span>
              <FaCircle className='text-green-500 text-xs'/>  
            </span> 
            livraison gratuite
          </div>
        </div>
        {/* middle Navbar */}
        <div className='border-b-2'>
          <div className="container bg-white text-black py-0.5  flex items-center gap-2 justify-end">
            <a href="#">
              <FaInstagram className="text-xl" />  
            </a>
            <a href="#">
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>
        {/* lower Navbar */}
        <div className="bg-white py-4">
            <div className="container flex justify-between items-center ">
                {/*menu */}
                <a href="" className='sm:hidden'>
                  <IoMenuOutline className='text-5xl '/>
                </a>
                {/* logo */}
                <div className="flex  items-center gap-16">
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                      Md Global
                    </a>
                    <ul className="sm:flex hidden gap-4">
                        <li>
                          <a href="">
                            Badges
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Stickers
                          </a>
                        </li>
                    </ul>
                </div>
                {/* search bar, user and order button */}
                <div className="flex justify-between items-center gap-4">
                    {/* search bar */}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='search'
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                    {/* user button */}
                    <button
                    onClick={() => handleOrderPopup()}
                    className=" "
                    >
                      <CiUser className="text-3xl text-black drop-shadow-sm cursor-pointer" />
                    </button>
                    {/* order button */}
                    <button
                    onClick={() => handleOrderPopup()}
                    className=" "
                    >
                      <HiOutlineShoppingBag className="text-3xl text-black drop-shadow-sm cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar