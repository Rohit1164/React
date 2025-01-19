import { useState, useRef } from "react";

function TextArea() {
  const [text, setText] = useState("");

  const copyBtn = useRef();

  const handleCopy = () => {
    copyBtn.current?.select();
    copyBtn.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(text);
  };

  const handleTrim = () => {
    if (text !== text.replace(/\s+/g, "")) {
      setText(text.replace(/\s+/g, " "));
    }
  };

  const handleReverseText = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleSpacesInWord = () => {
    setText(text.replace(/\s+/g, ""));
  };
  return (
    <>
      <div className="h-svh bg-gray-400">
        <div className="grid">
          <textarea
            className="w-[90%] bg-gray-800 ml-[5%] mt-10 rounded-lg h-80 text-white p-10"
            ref={copyBtn}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="flex justify-center space-x-4 mt-5">
            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={() => setText(text.toUpperCase())}
            >
              UpperCase
            </button>

            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={() => setText(text.toLowerCase())}
            >
              LowerCase
            </button>

            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={handleTrim}
            >
              Trim
            </button>

            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={handleCopy}
            >
              Copy
            </button>

            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={handleReverseText}
            >
              Reverse Text
            </button>

            <button
              className="bg-blue-600 border-none rounded-md p-2 text-white"
              onClick={handleSpacesInWord}
            >
              Word Space
            </button>
          </div>
        </div>

        <div className="m-[5%]">
          <p className="">Charactors:({text.length})</p>
          <p className="">word:({text.split(" ").filter(Boolean).length})</p>
        </div>
      </div>
    </>
  );
}

export default TextArea;
