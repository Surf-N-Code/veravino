
import { Bot } from "lucide-react";

const ChatInterface = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 px-4">
      {/* Main hero image area with chat overlay */}
      <div className="relative">
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-200 rounded-full opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-100 rounded-full opacity-60"></div>
        </div>
        
        {/* Person image placeholder */}
        <div className="relative z-10 flex justify-center">
          <div className="w-80 h-96 bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="w-64 h-80 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-full"></div>
          </div>
        </div>
        
        {/* Chat bubbles */}
        <div className="absolute inset-0 z-20">
          {/* User message - appears first after 1 second */}
          <div className="absolute top-8 right-8 opacity-0 animate-[fade-in_0.6s_ease-out_1s_forwards]">
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-lg max-w-xs">
                <p className="text-gray-800 text-sm">How much time do I have for my order return?</p>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">D</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-right">Debra</div>
          </div>
          
          {/* Bot response - appears second after 2.5 seconds */}
          <div className="absolute bottom-32 left-8 opacity-0 animate-[fade-in_0.6s_ease-out_2.5s_forwards]">
            <div className="flex items-start space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-blue-500 text-white rounded-2xl px-4 py-3 shadow-lg max-w-xs">
                <p className="text-sm">Hi Debra! You can return your purchase within 7 days.</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 ml-12">ChatBot</div>
          </div>
          
          {/* User response - appears third after 4 seconds */}
          <div className="absolute bottom-8 right-8 opacity-0 animate-[fade-in_0.6s_ease-out_4s_forwards]">
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-lg max-w-xs">
                <p className="text-gray-800 text-sm">That's what I needed! Thx</p>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">D</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-right">Debra</div>
          </div>
        </div>
        
        {/* Floating chat icon */}
        <div className="absolute bottom-4 right-4 z-30">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <Bot className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
