import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 300px;
`;

const JpaComponent = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
    // 게시판 목록을 불러오는 API 호출
    axios.get('/notejpa/findall')
      .then((response) => {
        setPosts(response.data);
        console.log(posts +"posts 값들은?") ;
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <h3>JPA 관련 게시판</h3>
      
      <BoardContainer>
      {posts.map((post) => (
        <PostCard key={post.number}>
           <Link to={`/jpa/${post.number}`}>
            <h4>{post.title}</h4>
           </Link>
            <p>{post.detail}</p>
            <p>{post.summary}</p>
        </PostCard>
      ))}
    </BoardContainer>
    <Link to="/jpainsert">
    <button >추가</button>
    </Link>
    </div>
  );
}

export default JpaComponent;