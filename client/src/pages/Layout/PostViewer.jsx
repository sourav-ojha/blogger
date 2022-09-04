import React from "react";
import { BsBook } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { usePost } from "../../context/postContext";
import { Avatar } from "flowbite-react";
import { AiOutlineLike } from "react-icons/ai";
import { marked } from "marked";
const PostViewer = () => {
  const params = useParams();

  const { post, getPost, likePost } = usePost();
  React.useEffect(() => {
    getPost(params.id);
  }, [params.id]);

  const handleLike = () => {
    likePost(post.post_id);
  };

  return (
    post && (
      <div
        // to={`/${url}`}
        className="w-full h-full p-4 flex flex-col  justify-between    "
      >
        <div className="w-full flex-1 flex flex-col justify-between">
          {/* cover image  */}
          <div className="w-full h-64 bg-gray-200 rounded-md">
            <img
              src={post.cover_img}
              alt="title"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* title  */}
          <h3 className="text-3xl pt-5 font-medium">{post.title}</h3>
          <p className="flex gap-2 items-center text-sm pt-2 pb-5 text-gray-500">
            <BsBook className="text-lg" /> {post.time_to_read} min Read
          </p>
          {/* keywords */}
          <div className="flex gap-2 pt-4 items-center">
            {post.keywords &&
              post.keywords.length > 0 &&
              post.keywords.map((words) => (
                <span
                  className="text-sm text-gray-500 p-2 rounded-sm border "
                  key={words}
                >
                  {words}
                </span>
              ))}
          </div>
          <div
            className="default_style ds"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
          />
          <div className="flex justify-between ">
            <div className="flex gap-3 pt-4 items-center">
              {/* small rounded image */}
              <Avatar alt="User settings" size="md" rounded={true} />
              <div className="flex flex-col  ">
                <p className="text-sm text-gray-500">{post.full_name}</p>
                <p className="text-sm text-gray-500">
                  {post.published_time_ago}
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-4 items-center">
              {/* like button */}
              <button
                className="flex gap-2 items-center text-sm text-gray-500 p-2 rounded-sm border "
                onClick={handleLike}
              >
                <AiOutlineLike className="text-lg" /> {post.like_count}
              </button>
            </div>
          </div>

          {/* empty for gap  */}
          <div className="h-10"></div>
        </div>
      </div>
    )
  );
};

export default PostViewer;
