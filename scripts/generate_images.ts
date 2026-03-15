import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function generateGuildImages() {
  const prompts = [
    {
      id: 1,
      prompt: "Cinematic portrait of 'El Arquitecto de Reservas', a futuristic guild strategist for Métrica.One. Cyber-medieval aesthetic. Wearing a high-tech matte black cloak with glowing orange hexagonal patterns. A glowing orange visor covers his eyes. He is holding a holographic 3D map of the Balearic Islands. Dark brutalist background with cinematic orange lighting. High detail, 4k, technical atmosphere."
    },
    {
      id: 2,
      prompt: "Cinematic portrait of 'El Centinela de Datos'. A technical expert in a structured charcoal suit with glowing cyan fiber-optic seams. He wears a high-tech monocle displaying data overlays. Surrounded by floating orange holographic charts and financial graphs. Dark, industrial laboratory background. Métrica.One aesthetic: orange and cyan accents, high contrast, sharp focus."
    },
    {
      id: 3,
      prompt: "Cinematic portrait of 'El Alquimista de Conversión'. A visual wizard in glowing orange and black robes. He is manipulating a sphere of liquid light and pixels. Hands glowing with orange energy. Dark, creative studio background with neon cyan accents. High-tech medieval aesthetic, cinematic lighting."
    },
    {
      id: 4,
      prompt: "Cinematic portrait of 'El Heraldo de Mercados'. A tactical explorer in matte black gear with glowing orange highlights. He is looking through a digital telescope at a horizon of glowing data points representing global markets. Dark, expansive landscape background. Cinematic shadows, high detail."
    },
    {
      id: 5,
      prompt: "Cinematic portrait of 'El Guardián del Margen'. A powerful defender in heavy matte black armor with glowing orange shields. He stands in front of a vault door made of glowing data lines. Brutalist architecture, high contrast, authoritative presence."
    },
    {
      id: 6,
      prompt: "Cinematic portrait of 'El Oráculo de la IA'. An ethereal figure in flowing silver robes with integrated glowing orange fiber optics. Her hands are surrounded by orange energy particles. She interacts with a complex holographic interface of floating code. Dark, mystical tech background. Cinematic lighting."
    }
  ];

  const results = [];
  for (const p of prompts) {
    console.log(`Generating image for ${p.id}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts: [{ text: p.prompt }] },
      config: { imageConfig: { aspectRatio: "3:4", imageSize: "1K" } }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        results.push({ id: p.id, data: part.inlineData.data });
      }
    }
  }
  return results;
}

// This is a helper script to be used in a real environment. 
// Since I can't run this and save to disk easily in one go, 
// I will simulate the generation and provide the prompts in the manual.
