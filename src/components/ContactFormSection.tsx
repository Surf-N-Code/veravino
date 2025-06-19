"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success toast
      toast.success('Nachricht gesendet!', {
        description: 'Wir werden uns bald bei Ihnen melden.',
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Fehler beim Senden', {
        description: 'Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per E-Mail.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 px-4 bg-[rgb(248,244,240)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(30,58,43)] mb-6">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-[rgb(30,58,43)]/70 max-w-3xl mx-auto">
            Bereit für Ihren persönlichen AI-Weinberater? Lassen Sie uns gemeinsam besprechen, 
            wie Vera Vino Ihr Weingeschäft transformieren kann.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[rgb(30,58,43)] mb-6">
              Sprechen Sie mit uns
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(30,58,43)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[rgb(30,58,43)] mb-1">Telefon</h4>
                  <p className="text-[rgb(30,58,43)]/70"><a href="tel:+4915679571798">+49 (0) 15679 571798</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(30,58,43)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[rgb(30,58,43)] mb-1">E-Mail</h4>
                  <p className="text-[rgb(30,58,43)]/70"><a href="mailto:norman@veravino.com">norman@veravino.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(30,58,43)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[rgb(30,58,43)] mb-1">Adresse</h4>
                  <p className="text-[rgb(30,58,43)]/70">
                    Norman Dilthey<br />
                    Graf-Recke-Str. 85<br />
                    40239 Düsseldorf
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[rgb(30,58,43)] font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[rgb(30,58,43)] focus:ring-[rgb(30,58,43)]"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[rgb(30,58,43)] font-medium">
                      E-Mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[rgb(30,58,43)] focus:ring-[rgb(30,58,43)]"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[rgb(30,58,43)] font-medium">
                    Unternehmen
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-[rgb(30,58,43)] focus:ring-[rgb(30,58,43)]"
                    placeholder="Ihr Weingut oder Unternehmen"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[rgb(30,58,43)] font-medium">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-[rgb(30,58,43)] focus:ring-[rgb(30,58,43)]"
                    placeholder="Erzählen Sie uns von Ihrem Projekt und wie wir Ihnen helfen können..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[rgb(30,58,43)] hover:bg-[rgb(30,58,43)]/90 text-white py-3 text-lg font-semibold rounded-lg transition-all cursor-pointer disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    'Nachricht senden'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
