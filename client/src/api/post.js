import { API_URL } from "../constants";
import { httpClient, httpClientWithOutToken } from "../utils/httpClient";

const getPosts = async () => {
  return await httpClientWithOutToken(`${API_URL}/blog`, "GET");
};

const getPost = async (post_id) => {
  return await httpClientWithOutToken(`${API_URL}/blog/${post_id}`, "GET");
};

const createPost = async (post) => {
  return await httpClient(`${API_URL}/blog`, "POST", post);
};

const deletePost = async (post_id) => {
  return await httpClient(`${API_URL}/blog/${post_id}`, "DELETE");
};

const likePost = async (post_id) => {
  return await httpClient(`${API_URL}/blog/${post_id}/like`, "POST");
};

const searchPosts = async (search) => {
  return await httpClientWithOutToken(
    `${API_URL}/search?query=${search}`,
    "GET"
  );
};

let postApi = {
  getPosts,
  getPost,
  createPost,
  deletePost,
  likePost,
  searchPosts,
};
export default postApi;