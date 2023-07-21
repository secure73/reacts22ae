import React from "react";

function Navbar() {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Tailwind Starter Kit
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onclick="toggleNavbar('example-collapse-navbar')"
          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              >
                <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
                Docs
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
              >
                <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i>
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
              >
                <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "></i>
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
              >
                <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>
            <li className="flex items-center">
              <button
                className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button"
                style={{ transition: "all 0.15s ease 0s" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
