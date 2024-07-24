import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import PostList from "./PostList";


function NavBar() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link className={"App-link"} to="/">Home</Link>
          <Link className={"App-link"} to="/posts">Posts</Link>
        </div>
        <Routes>
          <Route exact path="/" Component={Home}>
          </Route>
          <Route path="/posts" Component={PostList}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar;
