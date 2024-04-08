// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <>
      {/*Header - first row */}

      <div className=" flex justify-around w-screen max-sm:w-screen max-sm:flex max-sm:justify-between max-sm:items-stretch max-sm:px-1 pt-1">
        {/* logo */}

        <div className=" flex grow-0 shrink  items-center justify-center w-80 max-sm:w-1/3 max-sm:flex-col">
          <a
            className=" text-3xl font-bold max-sm:text-xl max-sm:w-full max-sm:text-center"
            style={{ color: "#CF2D2D" }}
            href="#"
          >
            BookUsNow
          </a>
          <div className="sm:hidden flex  items-center px-2 text-xs">
            <button className="  hover:scale-110">
              <FaMapMarkerAlt className="inline text-gray-400" /> Mumbai, India
              &gt;
            </button>
          </div>
        </div>

        {/* Mobile icons */}
        <div className="sm:hidden grow-0 shrink flex items-center justify-between w-24 text-xl">
          <button>
            <FaSearch />
          </button>
          <button>
            <FaHeart />
          </button>
          <button>
            <CgProfile />
          </button>
        </div>

        {/* category and searchbar */}
        <div className="flex  justify-end max-sm:hidden">
          <div className=" flex justify-center items-center bg-black text-white rounded-xl px-1">
            <div>
              <button className="mx-2 hover:border-red-200 hover:border hover:rounded-lg">
                {/* <CiMenuBurger  className="inline text-2xl"/> */}
                <GiHamburgerMenu className="inline text-2xl" />
              </button>
            </div>
            <div className="px-2 text-white ">Categories</div>
          </div>

          <div
            className=" flex justify-between items-center rounded-xl ml-2 text-center border-2 border-gray-300 px-2"
            style={{ width: "550px" }}
          >
            <input
              type="text"
              placeholder="DJI phantom"
              className="px-2"
              style={{ width: "500px", height: "80%" }}
            />
            <button className=" text-2xl" style={{ height: "80%" }}>
              <FaSearch className="" />
            </button>
          </div>
        </div>

        {/* favourites and signin */}

        <div className=" flex items-center justify-around rounded-xl w-64 max-sm:hidden">
          <button className="hover:border hover:border-gray-600 py-2 px-2 rounded-lg hover:bg-slate-500 hover:text-white">
            <FaHeart className="inline" />
            &nbsp; Favourites
          </button>
          <button className="border-2 border-gray-200 px-8 py-2 rounded-xl hover:bg-slate-500 hover:text-white">
            Sign In
          </button>
        </div>
      </div>

      {/*Header - second row */}

      <div className="flex w-screen ">
        {/* section one */}

        <div className="flex ml-32 items-center px-2 max-sm:hidden">
          <button className="  hover:scale-110">
            <FaMapMarkerAlt className="inline text-gray-400" /> Mumbai, India
            &gt;
          </button>
        </div>

        {/* section two */}

        <div className=" ml-64 p-2 max-sm:w-screen max-sm:m-0 max-sm:text-sm max-sm:overflow-x-auto">
          <nav
            style={{ width: "500px" }}
            className="flex justify-evenly max-sm:justify-between"
          >
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Live Shows
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Streams
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Movies
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Plays
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Events
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Sports
            </a>
            <a href="#" className=" hover:scale-110 max-sm:mx-2">
              Activities
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
