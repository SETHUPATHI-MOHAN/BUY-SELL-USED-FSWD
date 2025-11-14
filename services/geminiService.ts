
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY not found in environment variables. AI features will be disabled.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generateDescription = async (productName: string, keywords: string): Promise<string> => {
  if (!ai) {
    return Promise.reject(new Error("Gemini AI client is not initialized. Check your API_KEY."));
  }

  const prompt = `Generate a compelling, friendly, and honest product description for a used item being sold on an online marketplace.

Item Name: "${productName}"
Keywords: "${keywords}"

The description should be a single paragraph, around 2-4 sentences long. Highlight the key features and condition without overselling it. Make it sound appealing to a potential buyer. Do not use markdown or special formatting.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating description with Gemini:", error);
    throw new Error("Failed to generate AI description. Please try again later or write your own.");
  }
};
