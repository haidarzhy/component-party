import { useState } from "react";

export default function InputHello() {
  const [text, setText] = useState("Hello world");

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={(event) => {setText(event.target.value)}} />
    </>
  );
}
