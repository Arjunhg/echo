'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Send, Plus, MessageSquare } from 'lucide-react';
import useConversationStore from '@/store/conversationStore';
import { toast } from 'react-hot-toast';

export default function ConversationsPage() {
  const {
    conversations,
    selectedConversation,
    setSelectedConversation,
    addMessage,
    createConversation,
    updateConversationStatus,
  } = useConversationStore();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || conv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation?.messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    // Add user message
    addMessage(selectedConversation.id, {
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleString(),
    });
    setNewMessage('');

    // Simulate AI response
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);

    // Add AI response with a random response from predefined options
    const responses = [
      {
        text: 'I understand your question. Let me help you with that. Based on our knowledge base, here\'s what I found...',
        sources: [
          {
            id: 1,
            title: 'Help Center',
            type: 'Help Center',
            excerpt: 'This information is based on our comprehensive help center documentation...',
          },
        ],
      },
      {
        text: 'Thank you for your inquiry. According to our records, here\'s the information you need...',
        sources: [
          {
            id: 2,
            title: 'FAQ Database',
            type: 'FAQ',
            excerpt: 'This answer is sourced from our frequently asked questions...',
          },
        ],
      },
      {
        text: 'I\'ve found some relevant information that might help you. Here\'s what our documentation says...',
        sources: [
          {
            id: 3,
            title: 'Knowledge Base',
            type: 'Help Center',
            excerpt: 'This information is verified from our knowledge base...',
          },
        ],
      },
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    addMessage(selectedConversation.id, {
      sender: 'ai',
      text: randomResponse.text,
      timestamp: 'Just now',
      sources: randomResponse.sources,
    });
  };

  const handleStartNewConversation = () => {
    const userName = prompt('Enter user name:');
    if (!userName) return;

    // const initialMessage = prompt('Enter initial message:');
    // if (!initialMessage) return;

    createConversation(userName);
    toast.success('New conversation created');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 border-r rounded-xl bg-background/30 border-border p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-foreground">Conversations</h1>
          <button
            onClick={handleStartNewConversation}
            className="p-2 hover:bg-accent rounded-lg text-muted-foreground"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Conversations</option>
            <option value="resolved">Resolved</option>
            <option value="unresolved">Unresolved</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <motion.button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`w-full p-3 text-left rounded-lg mb-2 transition-colors ${
                selectedConversation?.id === conversation.id
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent/50 text-foreground'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare
                    className={`${
                      conversation.status === 'resolved' ? 'text-green-500' : 'text-primary'
                    }`}
                    size={20}
                  />
                  <span className="font-medium">{conversation.userName}</span>
                </div>
                <span className="text-sm text-muted-foreground">{conversation.timestamp}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col backdrop-blur-xl bg-background/10">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b border-border bg-background">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{selectedConversation.userName}</h2>
                  <p className="text-sm text-muted-foreground">Last message: {selectedConversation.timestamp}</p>
                </div>
                <select
                  value={selectedConversation.status}
                  onChange={(e) => updateConversationStatus(selectedConversation.id, e.target.value)}
                  className="px-3 py-1 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="unresolved">Unresolved</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {selectedConversation.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    {message.sources && (
                      <div className="mt-2 text-sm">
                        <p className="font-medium">Sources:</p>
                        {message.sources.map((source) => (
                          <div key={source.id} className="mt-1">
                            <p className="font-medium">{source.title}</p>
                            <p className="text-muted-foreground">{source.excerpt}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-accent text-accent-foreground rounded-lg p-3">
                    <p>AI is typing...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
