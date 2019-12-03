function createPost(postData) {
  let posts = JSON.parse(localStorage.getItem("posts"));
  if (!posts) {
    posts = [];
  }
  posts.push(postData);
  localStorage.setItem("posts", JSON.stringify(posts));
}

export default createPost;
