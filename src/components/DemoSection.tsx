import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Micro-Demo Bereich
        </h2>
        
        <p className="text-xl text-center text-gray-600 mb-12">
          Sehen Sie VeraVino in Aktion:
        </p>

        <div className="relative bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-2 md:p-8 shadow-xl">
          {/* YouTube Video Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/Qo-p2pZuQI4?si=YLGxFabF_g_0fmGs?rel=0&modestbranding=1"
                title="VeraVino Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video overlay with play button for visual appeal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
          
          {/* Video description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Erleben Sie unsere KI-Sommelierin Vera Vino
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sehen Sie, wie Vera Vino Ihnen bei der Weinauswahl hilft, Fragen zu Lagerung beantwortet 
              und persönliche Empfehlungen basierend auf Ihren Vorlieben gibt.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
