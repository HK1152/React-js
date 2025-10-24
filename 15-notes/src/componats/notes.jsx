import React, { useState } from "react";
import "./notes.css";

export default function Notes() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [store, setStore] = useState([]);

  let subaction = (e) => {
    e.preventDefault();

    if (!title.trim() || !detail.trim()) {
      alert("Please fill in both title and details!");
      return;
    }

    const copyStore = [...store];
    copyStore.push({
      title: title.trim(),
      detail: detail.trim(),
      id: Date.now(),
    });
    setStore(copyStore);

    setDetail("");
    setTitle("");
  };

  const deleteNote = (idx) => {
    const copyStore = [...store];

    copyStore.splice(idx, 1);

    setStore(copyStore);
  };
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>Write note</h1>

          <form
            onSubmit={(e) => {
              subaction(e);
            }}
            className="form"
          >
            <input
              type="text"
              value={title}
              placeholder="Enter note title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Enter details"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            ></textarea>

            <button type="submit">Done</button>
          </form>
        </div>

        <div className="right">
          <h1>My Notes</h1>
          {store.length === 0 ? (
            <div className="empty-state">
              <p>No notes yet...!</p>
            </div>
          ) : (
            <div className="notes-container">
              {store.map(function (e, index) {
                return (
                  <div key={index} className="note-card">
                    <div>
                      <h3 className="note-title">{e.title}</h3>
                      <p className="note-detail">{e.detail}</p>
                    </div>
                    <button
                      onClick={() => {
                        deleteNote(index);
                      }}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
