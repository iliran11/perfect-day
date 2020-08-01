import { useState } from "react";
import { sendDay } from "../services/transport";

const getEmptyActivity = () => ({ text: "", emoji: "" });

export default function Home() {
  const [inputs, setInputs] = useState([getEmptyActivity()]);
  const addInput = () => {
    const newInputs = [...inputs];
    newInputs.push(getEmptyActivity());
    setInputs(newInputs);
  };

  return (
    <>
      <div>
        {inputs.map((input, index) => {
          return (
            <div>
              <input
                onChange={(event) => {
                  inputs[index].activity = event.target.value;
                }}
              />
            </div>
          );
        })}
      </div>
      <button onClick={addInput}>Add a Must have in your perfect day</button>
      <button
        onClick={() =>
          sendDay({
            activities: inputs,
          })
        }
      >
        Send day
      </button>
    </>
  );
}
