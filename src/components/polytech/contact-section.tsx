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
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Benefits & Info */}
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange-400 text-sm font-bold mb-6 border border-white/20">
              GET IN TOUCH
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Let's Build
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
                Something Great
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-12 font-medium leading-relaxed">
              Schedule a free consultation with our Microsoft certified experts and discover how we can transform your business.
            </p>

            {/* Benefits list */}
            <div className="space-y-6 mb-12">
              {[
                { title: 'Free Consultation', desc: 'Expert guidance at no cost' },
                { title: '24-Hour Response', desc: 'Quick turnaround guaranteed' },
                { title: 'Tailored Solutions', desc: 'Custom strategies for your needs' },
                { title: 'Microsoft Certified', desc: 'Gold partner expertise' }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-white/60 text-sm font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@sacpolytech.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="glass p-10 md:p-12 rounded-3xl border-2 border-white/20 shadow-2xl">
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
