// import { Table, Card } from "react-bootstrap"
import { useEffect, useState } from "react"

function PostList () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

    return (
        <div>
            <ul>
                {posts.map((post)=>(
                    <Post
                        username={post.username}
                        title={post.title}
                        type={post.type}
                        body={post.body}
                    />
                ))}
            </ul>
        </div>
    )

export default PostList