import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SpeechBubbleLoader() {
  const messages = [
    "AI Model is searching the web....",
    "AI Model is analyzing results....",
    "AI Model is generating insights....",
    "AI Model is summarizing content....",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        key={index} // key triggers remount for animation
        className="text-[14px] font-bold italic text-gray-800"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {messages[index]}
      </motion.div>

      {/* Animated dots */}
      {[0, 0.2, 0.4, 0.6].map((delay, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-gray-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, delay }}
        />
      ))}
    </div>
  );
}
