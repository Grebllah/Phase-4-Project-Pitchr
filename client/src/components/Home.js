import Login from "./Login";
import NavBar from "./NavBar";
import PostList from "./PostList";
import { Table, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <Card>
        <h1>Home Page</h1>
        <Login/>
      </Card>
    </>
  )
}

export default Home