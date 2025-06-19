import { Bot, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Vera Vino</div>
                <div className="text-sm text-gray-400">KI-Weinberater</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vera Vino ist Ihr persönlicher AI-Sommelier: Sie berät, verkauft und lernt – damit jeder Klick zum Genuss wird.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300"><a href="tel:+4915679571798">+49 (0) 15679 571798</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300"><a href="mailto:norman@veravino.com">norman@veravino.com</a></span>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium">Norman Dilthey</div>
                <div className="text-sm">Graf-Recke-Str. 85</div>
                <div className="text-sm">40239 Düsseldorf</div>
              </div>
            </div>
          </div>

          <div>
          <h3 className="text-lg font-bold mb-6">Weitere Tools</h3>
          <div className="space-y-3">
            <Link href="https://dialog.ai" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
              <span>Dialog.ai</span>
            </Link>
            <Link href="https://diltheymedia.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
              <span>Diltheymedia.com</span>
            </Link>
            <Link href="https://contraia.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
              <span>Contraia.com</span>
            </Link>
          </div>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Nik Weis & Partner. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
