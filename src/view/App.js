import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./componets/header/Header";
import Home from "./componets/home/Home";
import Authors from "./componets/Authors";
import About from "./componets/About";
import CreatePost from "./componets/CreatePost";
import PostPage from "./componets/post_page/PostPage";
import AuthorPage from "./componets/author_page/AuthorPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts/new" component={CreatePost} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/author/:id" component={AuthorPage} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default App;
