import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useConversationStore = create(
  persist(
    (set) => ({
      conversations: [
        {
          id: 1,
          userName: 'John Doe',
          lastMessage: 'How do I request a refund?',
          timestamp: '2 hours ago',
          status: 'unresolved',
          messages: [
            {
              id: 1,
              sender: 'user',
              text: 'How do I request a refund?',
              timestamp: '2 hours ago',
            },
            {
              id: 2,
              sender: 'ai',
              text: 'To request a refund, please follow these steps:\n1. Go to your order history\n2. Select the order you want to refund\n3. Click on "Request Refund"\n4. Fill out the refund form\n5. Submit your request\n\nOur team will review your request within 24-48 hours.',
              timestamp: '2 hours ago',
              sources: [
                {
                  id: 1,
                  title: 'Refund Policy',
                  type: 'Help Center',
                  excerpt: 'Refund requests are processed within 24-48 hours of submission...',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          userName: 'Jane Smith',
          lastMessage: 'What are your shipping times?',
          timestamp: '1 hour ago',
          status: 'resolved',
          messages: [
            {
              id: 1,
              sender: 'user',
              text: 'What are your shipping times?',
              timestamp: '1 hour ago',
            },
            {
              id: 2,
              sender: 'ai',
              text: 'Our standard shipping times are:\n- Domestic: 3-5 business days\n- International: 7-14 business days\n\nExpress shipping is available for an additional fee.',
              timestamp: '1 hour ago',
              sources: [
                {
                  id: 2,
                  title: 'Shipping Information',
                  type: 'Help Center',
                  excerpt: 'Standard shipping times and options...',
                },
              ],
            },
          ],
        },
      ],
      
      selectedConversation: null,
      
      // Actions
      setSelectedConversation: (conversationId) =>
        set((state) => ({
          selectedConversation: state.conversations.find((conv) => conv.id === conversationId),
        })),
      
      addMessage: (conversationId, message) =>
        set((state) => {
          const conversation = state.conversations.find((conv) => conv.id === conversationId);
          if (!conversation) return state;

          const newMessage = {
            ...message,
            id: conversation.messages.length + 1,
            timestamp: message.timestamp || 'Just now',
          };

          return {
            conversations: state.conversations.map((conv) =>
              conv.id === conversationId
                ? {
                    ...conv,
                    messages: [...conv.messages, newMessage],
                    lastMessage: message.text,
                    timestamp: newMessage.timestamp,
                  }
                : conv
            ),
            selectedConversation: state.selectedConversation?.id === conversationId
              ? {
                  ...state.selectedConversation,
                  messages: [...state.selectedConversation.messages, newMessage],
                  lastMessage: message.text,
                  timestamp: newMessage.timestamp,
                }
              : state.selectedConversation,
          };
        }),
      
      createConversation: (userName, initialMessage) =>
        set((state) => {
          const newId = Math.max(0, ...state.conversations.map((conv) => conv.id)) + 1;
          const newConversation = {
            id: newId,
            userName,
            lastMessage: initialMessage,
            timestamp: 'Just now',
            status: 'unresolved',
            messages: [
              {
                id: 1,
                sender: 'user',
                text: initialMessage,
                timestamp: 'Just now',
              },
            ],
          };

          return {
            conversations: [newConversation, ...state.conversations],
            selectedConversation: newConversation,
          };
        }),
      
      updateConversationStatus: (conversationId, status) =>
        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === conversationId ? { ...conv, status } : conv
          ),
          selectedConversation:
            state.selectedConversation?.id === conversationId
              ? { ...state.selectedConversation, status }
              : state.selectedConversation,
        })),
      
      deleteConversation: (conversationId) =>
        set((state) => ({
          conversations: state.conversations.filter((conv) => conv.id !== conversationId),
          selectedConversation:
            state.selectedConversation?.id === conversationId
              ? null
              : state.selectedConversation,
        })),
    }),
    {
      name: 'conversation-storage', // unique name for localStorage key
      partialize: (state) => ({ conversations: state.conversations }), // only persist conversations
    }
  )
);

export default useConversationStore; 