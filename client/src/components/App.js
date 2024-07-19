import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar";
import Home from "./Home"
// import Login from "./Login"
import PostList from "./PostList"
import { NavLink } from "react-bootstrap";
import NavBar from "./NavBar";

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/posts")
  //     .then((r) => r.json())
  //     .then((posts) => setPosts(posts));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
    </div>
  )
}

export default App;
