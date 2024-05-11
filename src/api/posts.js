import { posts } from '.';
//axios

export function getPosts(params = '') {
  return posts.get('/', { params });
}

export function getPostById(id) {
  return posts.get(`/${id}`);
}

export function createPost(post) {
  return posts.post('', post);
}

export function updatePost(id, post) {
  return posts.patch(`/${id}`, post);
}
export function deletePost(id) {
  return posts.delete(id);
}
