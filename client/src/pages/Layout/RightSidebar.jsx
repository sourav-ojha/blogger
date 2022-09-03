import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const BlogPostCard = ({ post }) => {
  return (
    <div className="w-10/12 p-4 flex  gap-3 rounded-md  border-b justify-between hover:shadow-lg transition-all duration-300 cursor-pointer ">
      <div className="w-12 h-12  bg-gray-200 rounded-md">
        <img
          src="/profile.jpg"
          alt="title"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full flex-1 flex flex-col justify-between">
        <h3 className="text-2xl  font-medium">Title - Who are u</h3>
        <p className="text-md  text-gray-500">Author NAme</p>
        {/* likes */}
        <div className="flex gap-5 pt-1 text-lg text-gray-500">
          <div>1 sec ago</div>
          <div className="flex gap-1 pt-1 text-md text-gray-500">
            <AiOutlineLike className="text-2xl" />
            <p> 14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <aside className="w-full relative " aria-label="Sidebar">
      <div className="overflow-y-auto w-[70%] h-[89vh] absolute top-3 left-3 py-4 px-3 bg-white rounded-md dark:bg-gray-800">
        <div className="w-full  p-1 flex justify-between items-center ">
          <h3 className="text-xl font-semibold">Trending</h3>
          <div className="p-2 px-4 rounded-2xl border">See All</div>
        </div>
        <ul className="space-y-1">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
