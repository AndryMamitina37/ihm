import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5001");
const Test = () => {
  const [file, setfile] = useState(null);
  const [text, setText] = useState("");

  const Envoyer = (e) => {
    e.preventDefault();
    socket.emit("upload", { file: file, texte: text });
  };
  return (
    <div>
      <form onSubmit={Envoyer}>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        <img src={file} alt="" />
        <input
          type="text"
          name="text"
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <button type="submit">Vas y</button>
      </form>
    </div>
  );
};

export default Test;
