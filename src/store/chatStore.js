import { create } from 'zustand';

const useChatStore = create((set) => ({
  isOpen: false,
  messages: [],
  isTyping: false,
  selectedSource: null,
  
  // Actions
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  setTyping: (isTyping) => set({ isTyping }),
  setSelectedSource: (source) => set({ selectedSource: source }),
  
  // Simulated AI response
  sendMessage: async (text) => {
    set({ isTyping: true });
    
    // Add user message
    set((state) => ({ 
      messages: [...state.messages, { 
        id: Date.now(), 
        text, 
        isUser: true,
        timestamp: new Date().toISOString()
      }] 
    }));
    
    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add AI response
    const responses = [
      {
        text: "You can request a refund within 30 days¹ of your purchase. The process typically takes 5-7 business days² to complete.",
        sources: [
          {
            id: 1,
            title: "Refund Policy",
            type: "Help Article",
            excerpt: "Customers can request refunds within 30 days of purchase.",
          },
          {
            id: 2,
            title: "Processing Times",
            type: "FAQ",
            excerpt: "Refund processing takes 5-7 business days after approval.",
          },
        ],
      },
      {
        text: "Our shipping times vary by location. Domestic orders typically arrive within 3-5 business days¹, while international orders may take 7-14 business days².",
        sources: [
          {
            id: 1,
            title: "Shipping Policy",
            type: "Help Article",
            excerpt: "Domestic orders are delivered within 3-5 business days.",
          },
          {
            id: 2,
            title: "International Shipping",
            type: "FAQ",
            excerpt: "International orders may take 7-14 business days to arrive.",
          },
        ],
      },
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    set((state) => ({ 
      messages: [...state.messages, { 
        id: Date.now(), 
        ...response,
        isUser: false,
        timestamp: new Date().toISOString()
      }] 
    }));
    
    set({ isTyping: false });
  },
}));

export default useChatStore; 