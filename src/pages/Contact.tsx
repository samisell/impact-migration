import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Have questions? We are here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-ink mb-10">Contact Details</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-2">Our Office</h4>
                    <p className="text-muted text-sm leading-relaxed">123 Ikeja Way, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-2">Phone Number</h4>
                    <p className="text-muted text-sm leading-relaxed">+234 800 123 4567</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-2">Email Address</h4>
                    <p className="text-muted text-sm leading-relaxed">info@impactmigration.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ink text-white p-10 rounded-[2.5rem] shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={24} /></a>
                <a href="#" className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={24} /></a>
                <a href="#" className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={24} /></a>
                <a href="#" className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-ink mb-10">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Message</label>
                  <textarea rows={6} className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Your message..."></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-5">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Placeholder */}
      <section className="container mx-auto px-4 mt-24">
        <div className="h-[500px] bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center text-muted font-bold text-xl">
          Google Maps Embed Placeholder
        </div>
      </section>
    </div>
  );
};

export default Contact;
