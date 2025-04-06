// "use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt } from "./helperFunction";

export const fetchTypingData = async (topic: string, words: number): Promise<void> => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("API key is missing!");
    return;
  }

  const ai = new GoogleGenerativeAI(apiKey);

  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // Ensure correct model name
    const prompt = generatePrompt(topic, words);

    const response = await model.generateContent(prompt); // Correct method to generate content
    const unfilteredJsonString = response.response.text(); // Extract text output
    const jsonString = unfilteredJsonString.replace(/```json|```/g, '')
    const jsonData = JSON.parse(jsonString)

    console.log("Generated response:", jsonData);
    return jsonData; // Return the parsed JSON data
  } catch (error) {
    console.error("Error fetching typing data:", error);
  }
  finally {
    console.log("Typing data fetch attempt completed.");
  }
};
