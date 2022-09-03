import React from "react";
import { usePost } from "../../context/postContext";
import { AiOutlineLike } from "react-icons/ai";
import { Avatar } from "flowbite-react";
import moment from "moment";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  const { likePost } = usePost();
  const {
    title,
    url,
    content,
    post_id,
    keywords,
    username,
    full_name,
    category,
    like_count,
    time_to_read,
    published_date,
  } = post;
  let published_time_ago = moment(published_date).fromNow();

  const handleLike = () => {
    likePost(post_id);
  };
  return (
    <div
      // to={`/${url}`}
      className="w-10/12 h-full p-4 flex flex-col  rounded-md shadow-sm justify-between hover:shadow-lg transition-all duration-300   "
    >
      <div className="w-full flex-1 flex flex-col justify-between">
        <Link to={`${url}`}>
          {/* cover image  */}
          <div className="w-full h-64 bg-gray-200 rounded-md">
            <img
              src="/profile.jpg"
              alt="title"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* title  */}
          <h3 className="text-3xl pt-5 font-medium">{title}</h3>
          <p className="flex gap-2 items-center text-sm pt-2 pb-5 text-gray-500">
            <BsBook className="text-lg" /> {time_to_read} min Read
          </p>
          <p className="text-sm text-gray-500">{content}</p>
          <div className="flex gap-3 pt-4 items-center">
            {/* small rounded image */}
            <Avatar
              alt="User settings"
              img="/profile.jpg"
              size="md"
              rounded={true}
            />
            <div className="flex flex-col  ">
              <p className="text-sm text-gray-500">{full_name}</p>
              <p className="text-sm text-gray-500">{published_time_ago}</p>
            </div>
          </div>
        </Link>
        {/* keywords */}
        <div className="flex gap-2 pt-4 items-center">
          {keywords &&
            keywords.length > 0 &&
            keywords.map((words) => (
              <span
                className="text-sm text-gray-500 p-2 rounded-sm border "
                key={words}
              >
                {words}
              </span>
            ))}
        </div>
        {/* continue button */}
        <div className="flex pt-4 justify-between">
          <button className="bg-blue-500 hover:bg-white hover:text-blue-500 border  text-white px-4 py-2 rounded-2xl">
            Continue Reading
          </button>
          {/* like */}
          <div
            className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer  "
            onClick={handleLike}
          >
            <AiOutlineLike className="text-xl" />
            <p>{like_count}</p>
          </div>
        </div>
        {/* empty for gap  */}
        <div className="h-10"></div>
      </div>
    </div>
  );
};

const Home = () => {
  const { getPosts, posts, isError, errorMessage, successMessage } = usePost();

  return (
    <ul className="space-y-4  flex flex-col items-center ">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <BlogPostCard post={post} key={post.post_id} />)}
    </ul>
  );
};

export default Home;
