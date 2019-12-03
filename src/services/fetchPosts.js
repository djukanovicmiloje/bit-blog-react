import Post from "../entities/post";

export default async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postsData = JSON.parse(localStorage.getItem("posts"));

  let postsFromLocalStorage;
  if (postsData) {
    postsFromLocalStorage = postsData.map(
      post => new Post(1, post.title, post.body, 1)
    );
  } else {
    postsFromLocalStorage = [];
  }

  const postsFromAPI = posts.map(
    post => new Post(post.id, post.title, post.body, post.userId)
  );

  return postsFromLocalStorage.concat(postsFromAPI);
}
