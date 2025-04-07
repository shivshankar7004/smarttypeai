"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import { fetchTypingData } from "@/components/fetchTypingData";
import AiTypingTest from "./AiTypingTest";

const Page: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [words, setWords] = useState<number>(10);
  const [response, setResponse] = useState<boolean>(false); // State to store the response from the API
  const [description, setDescription] = useState<string>(""); // State to store the description of the topic
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading state
  const [story, setStory] = useState<string>(""); // State to store the data fetched from the API

  const hanndleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };
  const handleWordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(e.target.value);
  };
  const handleSearch = async () => {
    setResponse(true); 
    setLoading(true); // Set loading state to true when the search is initiated
    try {
       // Reset response state to false when a new search is initiated
      const tempData = await fetchTypingData(topic, words); // Fetch data from the API
      if (tempData.story) {
        setStory(tempData.story); // Store the fetched data in state
        setDescription(tempData.description); // Store the description in state
        // Set response state to true when data is fetched
        // console.log("Fetched data:", tempData.story); // Log the fetched data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    //   setLoading(false); // Set loading state to false when the search is completed
    setLoading(false); // Set loading state to true when the search is initiated

   
    }
   // Set response state to true when data is fetched
  };
  useEffect(()=>{
    console.log("Story updated:", typeof story); // Log the updated story state
  },[story]);
  

  if (!response) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h2 className=" text-center text-3xl font-semibold mt-10">
        AI Synonym Finder (Similar Words){" "}
        </h2>
        <div className="flex  items-center justify-center  bg-gray-100 p-10">
          <input
            type="text"
            className="w-[250px] h-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200"
            placeholder="Enter your topic here..."
            onChange={hanndleTopicChange}
            value={topic}
          />
          <input
            type="text"
            min={100}
            max={1000}
            className="w-[100px] h-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200"
            placeholder="words"
            onChange={handleWordsChange}
            value={words}
          />
          <button
            className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-green-800"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  } else if (response && loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h2 className=" text-center text-3xl font-semibold mt-10">
        AI Synonym Finder (Similar Words){" "}
        </h2>
        <div className="flex  items-center justify-center  bg-gray-100 p-10">
          <p>Loading...</p>
        </div>
      </div>
    );
  } else if (response && !loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h2 className=" text-center text-3xl font-semibold mt-10">
        AI Synonym Finder (Similar Words){" "}
        </h2>
        <p className="text-center  mb-3 text-2xl ">Your topic is  {topic}</p>
        <p className="text-center  mb-2">{description}</p>
        
        <div className="flex  items-center justify-center  bg-gray-100 p-4">
          <AiTypingTest data={story} />
        </div>
      </div>
    );
  }
};
export default Page;
