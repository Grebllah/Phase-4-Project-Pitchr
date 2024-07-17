import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Login from "./Login"
import PostList from "./PostList"

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/page2">Page2</Link>
          </div>
          <Routes>
            <Route exact path="/" Component={Home}>
            </Route>
            <Route path="/page2" Component={PostList}>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
)
}

export default App;
