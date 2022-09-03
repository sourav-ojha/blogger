import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import { AiOutlineLike } from "react-icons/ai";
import { Avatar } from "flowbite-react";

const BlogPostCard = ({ post }) => {
  return (
    <div className="w-10/12 h-full p-4 flex flex-col  rounded-md shadow-sm justify-between hover:shadow-lg transition-all duration-300 cursor-pointer  ">
      {/* cover image  */}
      <div className="w-full h-64 bg-gray-200 rounded-md">
        <img
          src="/profile.jpg"
          alt="title"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* title  */}
      <div className="w-full flex-1 flex flex-col justify-between">
        <h3 className="text-3xl py-5 font-medium">Title</h3>
        <p className="text-sm text-gray-500">
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content
        </p>
        <div className="flex gap-3 pt-4 items-center">
          {/* small rounded image */}
          <Avatar
            alt="User settings"
            img="/profile.jpg"
            size="md"
            rounded={true}
          />
          <div className="flex flex-col  ">
            <p className="text-sm text-gray-500">Author Name</p>
            <p className="text-sm text-gray-500">2 days ago</p>
          </div>
        </div>
        {/* keywords */}
        <div className="flex gap-2 pt-4 items-center">
          <span className="text-sm text-gray-500 p-2 rounded-sm border ">
            Keywords
          </span>
          <span className="text-sm text-gray-500 p-2 rounded-sm border ">
            Keywords
          </span>
          <span className="text-sm text-gray-500 p-2 rounded-sm border ">
            Keywords
          </span>
        </div>
        {/* continue button */}
        <div className="flex pt-4 justify-between">
          <button className="bg-blue-500 hover:bg-white hover:text-blue-500 border  text-white px-4 py-2 rounded-2xl">
            Continue Reading
          </button>
          {/* like */}
          <div className="flex items-center gap-1 text-gray-500 ">
            <AiOutlineLike className="text-xl" />
            <p>10</p>
          </div>
        </div>
        {/* empty for gap  */}
        <div className="h-10"></div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex-1 flex  bg-gray-100">
      <div className="w-1/5 bg-gray-100 ">
        <LeftSidebar />
      </div>
      <div className="flex-1">
        <div className="w-full relative " aria-label="Sidebar">
          <div className="overflow-y-auto w-full h-[89vh] absolute top-3  py-4 px-3 bg-white rounded-md dark:bg-gray-800">
            <ul className="space-y-4  flex flex-col items-center ">
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-gray-100 ">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Main;
