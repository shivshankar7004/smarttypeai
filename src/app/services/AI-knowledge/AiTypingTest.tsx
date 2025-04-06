"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const AiTypingTest = ({data}) => {

  const [words, setWords] = useState<string>(data);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const typingAreaRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     setWords(data);
//   }, []);
  
  useEffect(() => {
    if (input.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    if (input === words) {
      const endTime = Date.now();
      const timeTaken = (endTime - (startTime ?? endTime)) / 1000 / 60; // Convert to minutes
      const wordCount = words.split(" ").length;
      setWpm(Math.round(wordCount / timeTaken));
    }
  }, [input, words, startTime]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setInput((prev) => prev + e.key);
    }
  };

  const resetTest = () => {
    setWords(getRandomWords());
    setInput("");
    setStartTime(null);
    setWpm(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div
        ref={typingAreaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="border p-4 rounded-md w-full max-w-xl text-xl bg-white shadow-md min-h-[100px] outline-none cursor-text"
      >
        {words.split("").map((char, index) => {
          let color =
            index < input.length
              ? input[index] === char
                ? "text-green-500"
                : "text-red-500"
              : "text-gray-600";
          return (
            <span key={index} className={`${color} font-mono`}>
              {char}
            </span>
          );
        })}
      </div>
      {wpm !== null && (
        <p className="mt-4 text-xl font-semibold">Your WPM: {wpm}</p>
      )}
      <div className="flex flex-wrap gap-5 items-center mt-4">
      <button
        onClick={resetTest}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer"
      >
        Restart Test
      </button>
      
      </div>
      
    </div>
  );
};

export default AiTypingTest;
