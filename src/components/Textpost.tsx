"use client";

import React from "react";

export default function Textpost() {
  const [text, setText] = React.useState("");

  function handleInput(e: React.FormEvent<HTMLDivElement>) {
    setText(e.currentTarget.textContent || "");
  }

  return (
    <div
      role="textbox"
      className="cursor-text p-1"
      style={{ wordBreak: "break-word", outline: "none" }}
      onInput={handleInput}
      data-placeholder="What do you want to post!?"
      contentEditable
    ></div>
  );
}
