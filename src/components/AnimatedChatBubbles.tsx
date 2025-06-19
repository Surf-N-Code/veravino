"use client";

import { useEffect, useState } from "react";
import { Bot } from "lucide-react";

type Message = {
  type: "user" | "bot";
  text: string;
  html?: React.ReactNode;
  delay: number;
};

const messages: Message[] = [
  {
    type: "user",
    text: "Welcher Riesling passt zu Sushi?",
    delay: 0
  },
  {
    type: "bot",
    text: "Für Sushi empfehle ich unseren Kabinett Riesling 2023 - seine mineralische Frische harmoniert perfekt mit der japanischen Küche!",
    delay: 1500
  },
  {
    type: "user",
    text: "Was kostet der?",
    delay: 3000
  },
  {
    type: "bot",
    text: "Der Kabinett Riesling 2023 kostet 12,90€ pro Flasche. ",
    html: <span>Der Kabinett Riesling 2023 kostet 12,90€ pro Flasche. <span className="text-blue-500 hover:text-blue-700 underline cursor-pointer">Klicke hier zum bestellen</span></span>,
    delay: 4500
  },
];

export const AnimatedChatBubbles = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, messages?.[index]?.delay ?? 0);
    });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 space-y-6">
      {messages.slice(0, visibleMessages).map((message, index) => (
        <div 
          key={index} 
          className={`flex items-start space-x-4 animate-[fade-in_0.6s_ease-out]`}
        >
          {message.type === "bot" ? (
            <>
              <div className="w-12 h-12 bg-[rgb(207,220,255)] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-[rgb(30,58,43)]" />
              </div>
              <div className="flex-1">
                <div className="bg-[rgb(207,220,255)] text-[rgb(30,58,43)] rounded-2xl px-6 py-4 shadow-md max-w-md">
                  <p className="text-left">{message.html || message.text}</p>
                </div>
                <div className="text-xs text-[rgb(30,58,43)]/70 mt-2 ml-2">Vera Vino • AI-Sommelier</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex-1">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-md ml-auto max-w-md">
                  <p className="text-left text-[rgb(30,58,43)]">{message.text}</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-[rgb(207,220,255)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[rgb(30,58,43)] font-bold text-sm">K</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}; 