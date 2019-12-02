import posts from "../data/posts";
import Post from "../entities/post";

function createPost(postData, author) {
  const id = parseInt(Math.random() * 1000);
  const title = postData.title;
  const content = postData.body;

  author.addPost(id);
  posts.push(new Post(id, title, content, author));
}

export default createPost;
