import fetchAuthors from "./fetchAuthors";
import createPost from "./createPost";
import authors from "../data/authors";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  await fetchAuthors();

  posts.forEach((post, i) => {
    if (i < 20) {
      createPost(post, authors[i % 10]);
    }
  });
}
export default fetchPosts;
