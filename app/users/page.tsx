"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";

function onSubmit(value: any) {
  // console.log(value);
  // let data = { content: value };
  // console.log("data", data);
  const header = {
    "Content-Type": "application/json",
  };

  axios
    .post("/api/users", { body: value }, header as any)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

export default function Users() {
  const router = useRouter();
  const [text, setText] = useState("");
  return (
    <div>
      user
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-red-100 border"
      />
      <button onClick={() => onSubmit(text)}>send post</button>
    </div>
  );
}
