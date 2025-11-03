import React, { useState } from "react";
import "./card.css";

export default function Card() {
  const [items, setItems] = useState(0);
  function list() {
    setItems(items + 1);
  }

  let mainimage = "src\\img\\Chery  part 4.png";
  let down1 = "src\\img\\black Chery.png";
  let down2 = "src\\img\\Chery  1.png";
  let down3 = "src\\img\\dark red Chery.png";
  let down4 = "src\\img\\Chery part 1.png";
  let change1 = document.getElementById("change1");
  let change2 = document.getElementById("change2");
  let change3 = document.getElementById("change3");
  let change4 = document.getElementById("change4");

  let [img, setimg] = useState("src\\img\\Chery  part 4.png");

  if (change1) {
    change1.addEventListener("click", function () {
      setimg(down1);
    });
  }

  if (change2) {
    change2.addEventListener("click", function () {
      setimg(down2);
    });
  }

  if (change3) {
    change3.addEventListener("click", function () {
      setimg(down3);
    });
  }

  if (change4) {
    change4.addEventListener("click", function () {
      setimg(down4);
    });
  }

  return (
    <div className="main">
      <div className="left">
        <div className="top-1">
          {/* img */}
          <i
            className="fa-solid fa-share-nodes"
            id="share"
            style={{ color: "#ffffff" }}
          ></i>
          <i
            className="fa-regular fa-heart"
            id="like"
            style={{ color: "#ffffff" }}
          ></i>
          <img src="src\img\Chery  part 4.png" alt="Chery Part 4" />
        </div>
        <div className="down-1">
          {/* 4 img  */}
          <span>
            <a href="#">
              <img
                id="down-part1"
                src="src\img\Chery part 1.png"
                alt="Chery Part 1"
              />
              &nbsp;&nbsp;&nbsp;
            </a>
            <a href="#">
              <img
                id="down-part2"
                src="src\img\Chery part 2.png"
                alt="Chery Part 2"
              />
              &nbsp;&nbsp;&nbsp;
            </a>
            <a href="#">
              <img
                id="down-part3"
                src="src\img\Chery  part 3.png"
                alt="Chery Part 3"
              />
              &nbsp;&nbsp;&nbsp;
            </a>
            <a href="#">
              <img
                id="down-part4"
                src="src\img\Chery  part 4.png"
                alt="Chery Part 4"
              />
              &nbsp;&nbsp;&nbsp;
            </a>
          </span>
        </div>
      </div>
      <div className="right">
        <div className="right-in">
          <h1 className="title" style={{ color: "black" }}>
            Chery
          </h1>
          <p>code:446255</p>
          <span>
            <h4>$</h4>
            <h1 className="doll">11.52</h1>
          </span>
          <p>select A color</p>
          <div className="color">
            <span>
              {/* 4 img */}
              <img id="change1" src="src\img\black Chery.png" alt="Black Chery" />
              <img id="change2" src="src\img\Chery  1.png" alt="Chery 1" />
              <img id="change3" src="src\img\dark red Chery.png" alt="Dark Red Chery" />
              <img id="change4" src="src\img\Chery part 1.png" alt="Chery Part 1" />
            </span>
            <p>Benefits</p>
            <ul className="benefits" style={{ color: "black" }}>
              <li>trading as Chery.</li>
              <li>sweet or tart.</li>
              <li>edible stone fruit produced by HK cherry tree.</li>
              <li>Cherry trees originated in HK.</li>
            </ul>
          </div>
          <span>
            <button onClick={list}>Add to HK card</button>
            <p className="card list">number of cart:{items}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
