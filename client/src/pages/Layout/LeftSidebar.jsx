import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Menu = ({ Icon, label, linkTo = "/" }) => {
  return (
    <li>
      <NavLink
        to={linkTo}
        className="flex items-center p-2 py-2 text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Icon className="text-xl" />
        <span className="ml-3 flex-1 whitespace-nowrap">{label}</span>
        {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
          3
        </span> */}
      </NavLink>
    </li>
  );
};

const LeftSidebar = () => {
  return (
    <aside className="w-full relative " aria-label="Sidebar">
      <div
        className="overflow-y-auto w-52 absolute top-3 right-3 py-4 px-3 bg-white rounded dark:bg-gray-800"
        style={{
          backgroundColor: "rgb(248, 249, 250)",
        }}
      >
        <ul className="space-y-1">
          <Menu Icon={BsNewspaper} label="My Feed" linkTo="/" />
          <Menu Icon={BsNewspaper} label="Create Post" linkTo="/blog/create" />
          <Menu Icon={BsNewspaper} label="My Posts" linkTo="/myposts" />
          <Menu Icon={BsNewspaper} label="My Feed" />
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;
