import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JpaDetailComponent= () => {
     const { id } = useParams();
    
    const [post, setPost] = useState(null);

    useEffect(() => {
    const postId = id

    axios.get(`/notejpa/findById/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h3>게시물 상세 정보</h3>
      <h4>{post.title}</h4>
      <p>{post.detail}</p>
      <p>{post.summary}</p>
    </div>
  );
}

export default JpaDetailComponent