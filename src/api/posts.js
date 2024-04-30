import axios from 'axios';
//axios

export function getPosts(params = '') {
  return axios.get('http://localhost:5000/posts', { params });
}

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(post) {
  return axios.post('http://localhost:5000/posts', post);
}
export function updatePost(id, post) {
  return axios.put(`http://localhost:5000/posts/${id}`, post);
}
export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
