import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const [Post, setPost] = useState();
  const {
    query: { id },
  } = useRouter();

  
  useEffect(() => {
   

        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => {
            setPost(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
 
  }, [id]);

  return (
    <div>
      {!Post ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "30px",
          }}
        >
          Loading...
        </div>
      ):(

      <div className="post">
        <h1>{Post.title}</h1>
        <p>{Post.body}</p>
      </div>
      )}

    </div>
  );
};

export default Post;
