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
    <div className="bg-white duration-200 relative z-40 ">
        {/* lower Navbar */}
        <div className="py-4 bg-white flex justify-center px-10">
            <div className="container flex justify-between items-center   ">
                {/*menu */}
                <a href="" className='sm:hidden'>
                  <IoMenuOutline className='text-5xl '/>
                </a>
                {/* logo */}
                <div className="flex  items-center gap-16 ">
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
                <div className="flex justify-between items-center gap-4 ">
                    {/* search bar */}
                    <div className='relative group  '>
                        <input type="text" placeholder='search'
                        className="w-[100px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar