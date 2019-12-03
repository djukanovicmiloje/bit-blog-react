import React from "react";
import "./CreatePost.css";
import createPost from "../../services/createPost";

class CreatePost extends React.Component {
  render() {
    return (
      <div id="createNew">
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
        <div id="btns">
          <button>Cancel</button>
          <button onClick={() => this.onSaveClick()}>Save</button>
        </div>
      </div>
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
    createPost(postData);
  }
}
export default CreatePost;
