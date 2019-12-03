import Post from "../entities/post";

async function fetchPostsFromSameAuthor(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts = await response.json();

  return posts.map(
    post => new Post(post.id, post.title, post.body, post.userId)
  );
}
export default fetchPostsFromSameAuthor;
