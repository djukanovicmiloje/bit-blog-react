import React from "react";
import createPost from "../../services/createPost";
import authors from "../../data/authors";
class CreatePost extends React.Component {
  render() {
    return (
      <>
        <h2>New Post</h2>
        <h4>Title</h4>
        <input
          onChange={event => this.handleTitleChange(event)}
          type="text"
        ></input>
        <h4>Content</h4>
        <textarea
          onChange={event => this.handleContentChange(event)}
        ></textarea>
        <button onClick={() => this.onSaveClick()}>Cancel</button>
        <button>Save</button>
      </>
    );
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onSaveClick() {
    const postData = {
      title: this.state.title,
      body: this.state.content
    };
    createPost(postData, authors[0]);
  }
}
export default CreatePost;
