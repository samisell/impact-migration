import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Loader2, CheckCircle } from 'lucide-react';
import { databases } from '../lib/appwrite';
import { ID } from 'appwrite';
import { ContactMessage } from '../types';
import { CONTACT_INFO } from '../constants';
import { sendEmailNotification } from '../lib/email';

const Contact = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_MESSAGES_COLLECTION_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send email notification to info@impactmigration.com
      await sendEmailNotification({
        formName: 'Contact Us Form',
        subject: formData.subject || 'New Contact Inquiry',
        senderName: formData.fullName,
        senderEmail: formData.email,
        data: {
          'Full Name': formData.fullName,
          'Email Address': formData.email,
          'Subject': formData.subject,
          'Message': formData.message
        }
      });

      if (databaseId && collectionId) {
        await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          {
            ...formData,
            createdAt: new Date().toISOString()
          }
        );
      } else {
        console.log('Appwrite not configured. Form data:', formData);
      }
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <h4 className="font-bold text-ink mb-2">Head Office</h4>
                    <p className="text-muted text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-2">Call Us</h4>
                    <div className="space-y-1">
                      {CONTACT_INFO.phones.map((phone, index) => (
                        <p key={index} className="text-muted text-sm leading-relaxed">
                          <a href={`tel:${phone}`} className="hover:text-primary font-semibold transition-colors">
                            {phone}
                          </a>
                        </p>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <a
                        href={CONTACT_INFO.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-2">Email Address</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors font-semibold">
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ink text-white p-10 rounded-[2.5rem] shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href={CONTACT_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.096-2.8V9.41a6.332 6.332 0 1 0 5.541 6.262V9.432a8.2 8.2 0 0 0 4.77 1.526V7.522a4.83 4.83 0 0 1-1.000-.836z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-ink mb-10">Send a Message</h3>
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-primary w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-ink mb-4">Message Sent!</h4>
                  <p className="text-muted mb-8 text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-primary px-8"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink uppercase tracking-widest">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink uppercase tracking-widest">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-5"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
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

