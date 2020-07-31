import Link from "next/link";
import { useState } from "react";
import { sendDay } from "../services/transport";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => sendDay(value)}>Send day</button>
    </>
  );
}
