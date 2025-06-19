
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Seit Vera Vino online ist, kaufen Besucher doppelt so oft direkt nach der Beratung.',
      author: 'Max Mustermann',
      role: 'E-Commerce-Manager',
      company: 'Weingut Mustermann',
      rating: 5
    },
    {
      quote: 'Der Bot trifft den Ton unserer Marke perfekt und spart uns jeden Monat Stunden an Support.',
      author: 'Maria Musterfrau',
      role: 'Marketingleiterin',
      company: 'Traditionskellerei Musterfrau',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-green-50">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-green-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-amber-700 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
