export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const DEFAULT_CONTENT = {
  hero: {
    title: "THE FUTURE OF EV CHARGING STARTS AT HOME.",
    subtitle: "SMART CHARGING, LIMITLESS POSSIBILITIES.",
    description: "BexaVolt delivers intelligent, safe and powerful EV charging solutions for modern homes.",
    primaryCTA: "GET A FREE QUOTE",
    secondaryCTA: "EXPLORE CHARGER"
  },
  features: [
    { title: "SAVE MORE", description: "Up to 60% lower charging costs*" },
    { title: "CLEAN ENERGY", description: "Power your drive with cleaner energy." },
    { title: "SAFE & RELIABLE", description: "Built with advanced safety protection." },
    { title: "ADD VALUE", description: "Increase the value of your home." }
  ]
};

export async function getContent() {
  try {
    const res = await fetch(`${API_URL}/content`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000), // 3s timeout — don't block the page
    });
    if (!res.ok) return DEFAULT_CONTENT;
    const data = await res.json();
    return { ...DEFAULT_CONTENT, ...data };
  } catch {
    return DEFAULT_CONTENT;
  }
}
