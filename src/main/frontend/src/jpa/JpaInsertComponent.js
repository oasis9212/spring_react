import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JpaInsertComponent= () =>{
   const navigate = useNavigate(); // useNavigate 훅 사용
   const [newNote, setNewNote] = useState({
    title: "",
    detail: "",
    summary: ""
  });

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleAddNote = () => {
    // 입력된 정보로 새로운 노트 추가
    axios.post('/notejpa/insert', newNote)
      .then((response) => {
        // 성공적으로 추가된 경우
        console.log("New note added:", response.data);
        // 추가된 후에 필요한 로직 추가
         navigate("/jpa");
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  };

    return (
         <div>
      <h3>새로운 노트 추가</h3>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={newNote.title}
        onChange={handleInputChange}
      />
      <br />
      <label>Detail:</label>
      <input
        type="text"
        name="detail"
        value={newNote.detail}
        onChange={handleInputChange}
      />
      <br />
      <label>Summary:</label>
      <input
        type="text"
        name="summary"
        value={newNote.summary}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAddNote}>추가</button>
    </div>

    );
}

export default JpaInsertComponent