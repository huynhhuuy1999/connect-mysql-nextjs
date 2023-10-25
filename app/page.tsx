"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// function onSubmit(value: any) {
//   console.log(value);
//   let data = { content: value };
//   axios
//     .post("/api/users", data)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  return (
    <div>
      <h2>hihi</h2>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-red-100 border"
      />
      <button onClick={() => onSubmit(text)}>send post</button> */}
      <button onClick={() => router.push("/users")}>send post</button>
    </div>
  );
}
