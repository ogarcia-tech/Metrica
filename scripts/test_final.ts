import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function generateOne() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: { parts: [{ text: "Cinematic portrait of a futuristic guild strategist. Cyber-medieval aesthetic. Matte black cloak with glowing orange hexagonal patterns. Glowing orange visor. Holding a holographic 3D map of the Balearic Islands. Dark brutalist background. 3:4 aspect ratio." }] },
    config: { imageConfig: { aspectRatio: "3:4", imageSize: "1K" } }
  });
  const part = response.candidates[0].content.parts.find(p => p.inlineData);
  if (part && part.inlineData) {
    console.log("SUCCESS");
  }
}
generateOne();
