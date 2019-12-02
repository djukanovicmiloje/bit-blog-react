class Author {
  constructor(id, name, username, email, address, phone, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.company = company;
    this.postList = [];
    this.numberOfPosts = 0;
  }
  addPost(postId) {
    this.postList.push(postId);
    this.numberOfPosts++;
  }
}
export default Author;
