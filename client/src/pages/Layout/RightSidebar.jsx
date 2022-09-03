import moment from "moment";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { usePost } from "../../context/postContext";

const BlogPostCard = ({ post }) => {
  let published_time_ago = moment(post.published_date).fromNow();

  return (
    <Link
      to={`/${post.url}`}
      className="w-10/12 p-4 flex  gap-3 rounded-md  border-b justify-between hover:shadow-lg transition-all duration-300 cursor-pointer "
    >
      <div className="w-12 h-12  bg-gray-200 rounded-md">
        <img
          src="/profile.jpg"
          alt="title"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full flex-1 flex flex-col justify-between">
        <h3 className="text-xl  font-medium">{post.title}</h3>
        <p className="text-md  text-gray-500"> {post.full_name}</p>
        {/* likes */}
        <div className="flex items-center gap-5 pt-1 text-lg text-gray-500">
          <div className="text-sm text-gray-500">{published_time_ago}</div>
          <div className="flex gap-1  text-md text-gray-500">
            <AiOutlineLike className="text-2xl" />
            <p> 14</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const RightSidebar = () => {
  const { posts } = usePost();
  return (
    <aside className="w-full relative " aria-label="Sidebar">
      <div className="overflow-y-auto w-96 h-[89vh] absolute top-3 left-3 py-4 px-3 bg-white rounded-md dark:bg-gray-800">
        <div className="w-full  p-1 flex justify-between items-center ">
          <h3 className="text-xl font-semibold">Trending</h3>
          <div className="p-2 px-4 rounded-2xl border">See All</div>
        </div>
        <ul className="space-y-1">
          {posts.map((post) => (
            <BlogPostCard post={post} key={post.post_id} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
