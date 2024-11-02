"use client";

import React, { useState } from "react";
import "./NewPost.css";

export default function NewPost() {
  const [enteredBody, setEnteredBody ] = useState<string>('');

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  return (
    <form className="form">
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input id="name" required type="text" />
      </p>
    </form>
  );
}
