"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Let's <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">Connect</span>
          </h2>
          <p className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl font-bold">
            Schedule a consultation with our Microsoft experts today
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-10 md:p-12 rounded-3xl border-2 border-white/20 glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold text-white uppercase tracking-wide">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg font-medium focus:bg-white/20 focus:border-cyan-300"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold text-white uppercase tracking-wide">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg font-medium focus:bg-white/20 focus:border-cyan-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-sm font-bold text-white uppercase tracking-wide">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg font-medium focus:bg-white/20 focus:border-cyan-300"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold text-white uppercase tracking-wide">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  placeholder="I'm interested in..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg font-medium focus:bg-white/20 focus:border-cyan-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent font-black text-xl py-7 rounded-full hover:scale-105 transition-transform shadow-2xl h-auto"
              >
                Schedule Consultation
                <Send className="w-6 h-6 ml-3" />
              </Button>

              <p className="text-white/60 text-center text-sm font-medium">
                🔒 Your information is secure • We respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
