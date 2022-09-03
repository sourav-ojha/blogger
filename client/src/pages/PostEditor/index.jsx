import React from "react";
import { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Toast } from "../../components/Toast";
import { usePost } from "../../context/postContext";
import TextEditor from "./TextEditor";

const PostEditor = () => {
  const [state, setState] = React.useState({
    title: "",
    content: "",
    keywords: "",
    category: "",
  });
  const { createPost, isError, errorMessage, successMessage } = usePost();

  const [isCategoryEnabled, setIsCategoryEnabled] = React.useState(false);
  const [isKeywordsEnabled, setIsKeywordsEnabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleCategory = () => {
    setIsCategoryEnabled(!isCategoryEnabled);
  };

  const toggleKeywords = () => {
    setIsKeywordsEnabled(!isKeywordsEnabled);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let payload = {
      title: state.title,
      content: state.content,
      keywords: state.keywords.split(","),
      category: state.category,
    };
    createPost(payload);
  };

  useEffect(() => {
    if (isError) {
      Toast.fire({
        icon: "error",
        title: errorMessage,
      });
      setIsLoading(false);
    }
    if (successMessage) {
      Toast.fire({
        icon: "success",
        title: successMessage,
      });
      setIsLoading(false);
    }
  }, [isError, successMessage]);

  return (
    <div className="w-screen h-screen flex flex-col ">
      {/* Navbar */}
      <nav className="bg-gray-50 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="/profile.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Blogger
            </span>
          </Link>
          <div className="flex gap-2 md:order-2">
            {/* save button  */}
            <button
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Save
            </button>
            {/* publish button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Publish
            </button>
          </div>
        </div>
      </nav>
      {/* container max-width=1200px margin-auto */}
      <div className="container mx-auto mt-5 flex flex-col gap-3">
        {/* upload cover pic */}
        {/* category and keyword enabling button */}
        <div className="flex  gap-2">
          {!isCategoryEnabled && (
            <button
              className="bg-white hover:bg-gray-400 text-gray-500 hover:text-white rounded-2xl border transition font-bold py-2 px-4 "
              onClick={toggleCategory}
            >
              Add Category
            </button>
          )}
          {!isKeywordsEnabled && (
            <button
              className="bg-white hover:bg-gray-400 text-gray-500 hover:text-white rounded-2xl border transition font-bold py-2 px-4 "
              onClick={toggleKeywords}
            >
              Add Keyword
            </button>
          )}
        </div>
        {/* title */}
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Blog Title ..."
          className="w-full px-4 text-3xl mt-3  font-semibold placeholder:text-gray-500 placeholder:font-bold outline-none border-none focus:ring-0  focus:outline-none "
        />
        <div>
          {isKeywordsEnabled && (
            <div className="relative">
              <input
                type="text"
                name="keywords"
                id="keywords"
                onChange={handleChange}
                placeholder="Keywords (seperated by comma) "
                className="w-full px-4 text-2xl font-medium placeholder:text-gray-500 placeholder:font-semibold outline-none border-none focus:ring-0  focus:outline-none "
              />
              <div className="absolute top-0 right-0" onClick={toggleKeywords}>
                <MdCancel />
              </div>
            </div>
          )}
          {isCategoryEnabled && (
            <div className="relative">
              <input
                type="text"
                name="category"
                id="category"
                onChange={handleChange}
                placeholder="Enter category "
                className="w-full px-4 text-2xl font-medium placeholder:text-gray-500 placeholder:font-semibold outline-none border-none focus:ring-0  focus:outline-none "
              />
              <div className="absolute top-0 right-0" onClick={toggleCategory}>
                <MdCancel />
              </div>
            </div>
          )}
        </div>

        <TextEditor
          name="content"
          value={state.content}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PostEditor;
