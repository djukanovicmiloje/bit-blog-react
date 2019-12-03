import Post from "../entities/post";

export default async function fetchSinglePost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return new Post(post.id, post.title, post.body, post.userId);
}
