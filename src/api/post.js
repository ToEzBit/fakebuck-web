import axios from "../config/axios";

export const createPost = (title, image) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", image);
  axios.post("/posts", formData);
};

export const getAllPost = () => {
  return axios.get("/users/posts");
};

export const createComment = (title, postId) => {
  return axios.post(`/posts/${postId}/comments`, { title: title });
};

export const deleteComment = (postId, commentId) => {
  return axios.delete(`/posts/${postId}/comments/${commentId}`);
};

export const createLike = (postId) => {
  return axios.post(`/posts/${postId}/like`);
};

export const deleteLike = (postId) => {
  return axios.delete(`/posts/${postId}/like`);
};

export const editPost = (title, image, postId) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", image);
  return axios.patch(`/posts/${postId}`, formData);
};

export const deletePost = (postId) => {
  return axios.delete(`/posts/${postId}`);
};
