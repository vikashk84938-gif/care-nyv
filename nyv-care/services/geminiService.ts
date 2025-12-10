import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Lazy initialization to prevent crashes if process is undefined during module load
let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY || '';
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are "NYV AI", a helpful and empathetic virtual assistant for NYV Care, a premier healthcare clinic. 
Your goal is to assist website visitors by answering general health questions, explaining clinic services, and guiding them to book appointments.

Key Guidelines:
1.  **Medical Disclaimer**: If a user asks a medical question, YOU MUST START by stating: "I am an AI, not a doctor. Please consult a professional for medical advice."
2.  **Clinic Tone**: Be professional, warm, and reassuring.
3.  **Services**: We offer Primary Care, Cardiology, Pediatrics, and Telemedicine.
4.  **Appointments**: If a user wants to book, ask for their preferred department and urgency, then simulate a booking confirmation or tell them a receptionist will call.
5.  **Emergency**: If the user describes life-threatening symptoms (chest pain, difficulty breathing, etc.), immediately tell them to call 911 or emergency services.
`;

let chatSession: Chat | null = null;

export const startChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAIClient();
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = startChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return a user-friendly error message instead of throwing, so the UI can display it
    throw new Error("Failed to connect to the AI assistant.");
  }
};