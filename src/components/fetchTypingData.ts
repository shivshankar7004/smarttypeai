// In your client component or helper
export const fetchTypingData = async (topic: string, words: number): Promise<any> => {
    try {
      const res = await fetch("/api/fetch-typing-data-dictonary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, words }),
      });
  
      if (!res.ok) throw new Error("Failed to fetch typing data");
      const data = await res.json();
      // console.log("Typing data:", data);
      return data;
    } catch (error) {
      console.error("Client-side fetch error:", error);
    }
  };
  