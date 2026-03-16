import { useState, useEffect } from 'react';
import { getGemini } from '../lib/gemini';
import { TeamMember } from '../../types';

const STORAGE_KEY = 'metrica_team_images_v3';

export const useTeamImages = (members: TeamMember[]) => {
  const [images, setImages] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        setImages(JSON.parse(cached));
        setLoading(false);
        return;
      }

      const ai = getGemini();
      const newImages: Record<number, string> = {};

      for (const member of members) {
        try {
          const prompt = `Cinematic character portrait of a ${member.gender || 'male'} character named ${member.name}, known as '${member.title}'. 
          The character is riding a '${member.mount}' that corresponds to their function.
          Aesthetic: Cyberpunk Medieval Corporate. High-tech armor with heraldic symbols, subtle orange and cyan neon accents.
          Background: Neutral, minimalist, studio-like background to emphasize the character and their mount. 
          Pose: Professional, authoritative, and epic.
          Style: High quality, hyper-detailed, cinematic lighting, 3:4 aspect ratio.`;

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: '3:4' } }
          });

          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              newImages[member.id] = `data:image/png;base64,${part.inlineData.data}`;
            }
          }
        } catch (error) {
          console.error(`Error generating image for ${member.name}:`, error);
        }
      }

      setImages(newImages);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newImages));
      setLoading(false);
    };

    loadImages();
  }, [members]);

  return { images, loading };
};
