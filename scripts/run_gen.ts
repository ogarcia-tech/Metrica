import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function run() {
  const prompts = [
    "Cinematic portrait of a futuristic guild strategist. Cyber-medieval aesthetic. Matte black cloak with glowing orange hexagonal patterns. Glowing orange visor. Holding a holographic 3D map of the Balearic Islands. Dark brutalist background. 3:4 aspect ratio.",
    "Technical expert in charcoal suit with glowing cyan fiber-optic seams. High-tech monocle displaying data overlays. Surrounded by floating orange holographic charts. Dark industrial laboratory. 3:4 aspect ratio.",
    "Visual wizard in glowing orange and black robes. Manipulating a sphere of liquid light and pixels. Hands glowing with orange energy. Dark creative studio with neon cyan accents. 3:4 aspect ratio.",
    "Tactical explorer in matte black gear with glowing orange highlights. Looking through a digital telescope at a horizon of glowing data points. Dark expansive landscape. 3:4 aspect ratio.",
    "Powerful defender in heavy matte black armor with glowing orange shields. Standing in front of a vault door made of glowing data lines. Brutalist architecture. 3:4 aspect ratio.",
    "Ethereal figure in flowing silver robes with integrated glowing orange fiber optics. Hands surrounded by orange energy particles. Interacting with a complex holographic interface of floating code. 3:4 aspect ratio."
  ];

  const results = await Promise.all(prompts.map(p => ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: { parts: [{ text: p }] },
    config: { imageConfig: { aspectRatio: "3:4", imageSize: "1K" } }
  })));

  results.forEach((res, i) => {
    const part = res.candidates[0].content.parts.find(p => p.inlineData);
    if (part && part.inlineData) {
      console.log(`VASALLO_${i+1}: ${part.inlineData.data.substring(0, 50)}...`);
    }
  });
}
run();
