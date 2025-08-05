"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setInput("");
    setMessages([]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input.trim() };
    setMessages((prev: any) => [...prev, newMessage]);

    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages((prev: any) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotReply = (userInput: string) => {
    const text = userInput.toLowerCase();

    if (text.includes("price") || text.includes("cost")) {
      return "Our pricing depends on your selected device and duration. Would you like a quote?";
    }

    if (text.includes("macbook") || text.includes("laptop")) {
      return "Yes, we offer MacBooks and laptops. Would you like to proceed with a rental?";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hi there! How can I assist you today?";
    }

    if (text.includes("yes")) {
      return "It depend on the device and duration. Can you specify what you're looking for?";
    }

    return "Thanks for your message! We'll get back to you soon.";
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg w-32 p-3 mb-2 border border-gray-200"
          >
            <div className="text-sm font-medium text-gray-800">
              Chat with us
            </div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-slate-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">Flyers Connect</div>
                    <div className="text-xs opacity-90">Virtual Assistant</div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 px-4 py-3 min-h-[400px] max-h-[400px] overflow-y-auto space-y-2 bg-gray-50 text-sm">
              {messages.length === 0 && (
                <p className="text-gray-400 text-center mt-10">
                  Start a conversation about Mac rentals.
                </p>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-600 text-white"
                      : "mr-auto bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className="px-3 py-2 bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={handleOpen}
        className="w-14 h-14 bg-gradient-to-r from-[#006fe6] to-[#6C4BFF] hover:from-blue-700 hover:to-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </motion.button>
    </div>
  );
}
