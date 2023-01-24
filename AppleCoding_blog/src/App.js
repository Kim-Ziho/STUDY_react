/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 맛집";
  let [title, setTitle] = useState([
    "올 겨울",
    "혼자 어때",
    "둘이 어때",
    "셋이 어때",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {title[0]} <span>👍</span> 0
        </h3>
        <p>1월 23일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>1월 24일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>1월 25일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[3]}</h3>
        <p>1월 26일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
