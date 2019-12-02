import posts from "../data/posts";

function getPost(postID) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == postID) {
      return posts[i];
    }
  }
}
export default getPost;
