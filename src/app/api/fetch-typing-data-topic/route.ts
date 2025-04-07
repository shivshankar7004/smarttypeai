import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt } from "./helperFunction"; // Import the helper function to generate the prompt

export const dynamic = "force-dynamic"; // Force revalidation on every request

export async function POST(req: Request) {
  const { topic, words } = await req.json(); // Destructure the request body to get topic and words
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key is missing" }), {
      status: 500,
    });
  }

  try {
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // Ensure correct model name
    const prompt = generatePrompt(topic, words);

    const response = await model.generateContent(prompt); // Correct method to generate content
    const unfilteredJsonString = response.response.text(); // Extract text output
    const jsonString = unfilteredJsonString.replace(/```json|```/g, "");
    const jsonData = JSON.parse(jsonString);

    return new Response(JSON.stringify(jsonData), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch typing data" }),
      { status: 500 }
    );
  }
}
