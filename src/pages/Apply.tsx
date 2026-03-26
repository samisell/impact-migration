import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, Send, Loader2 } from 'lucide-react';
import { databases } from '../lib/appwrite';
import { ID } from 'appwrite';
import { Lead } from '../types';
import { COUNTRIES } from '../constants';

const Apply = () => {
  const [formData, setFormData] = useState<Lead>({
    fullName: '',
    email: '',
    phone: '',
    preferredCountry: '',
    courseOfInterest: '',
    educationLevel: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
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
        // Mock success if Appwrite is not configured
        console.log('Appwrite not configured. Form data:', formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-24 pb-48 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 text-center max-w-xl mx-4"
        >
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle className="text-primary w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold text-ink mb-6">Application Received!</h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Thank you for choosing Impact Migration. Our expert counselors will review your details and contact you within 24-48 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="btn-primary w-full"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Start Your <span className="text-primary">Application</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Fill out the form below and our experts will guide you through your study abroad journey.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
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
                    placeholder="John Doe"
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
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
                    placeholder="john@example.com"
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 123 4567"
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Preferred Country</label>
                  <select
                    name="preferredCountry"
                    required
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all appearance-none"
                  >
                    <option value="">Select Country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other">Other European Country</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Course of Interest</label>
                  <input
                    type="text"
                    name="courseOfInterest"
                    required
                    value={formData.courseOfInterest}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science"
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink uppercase tracking-widest">Education Level</label>
                  <select
                    name="educationLevel"
                    required
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all appearance-none"
                  >
                    <option value="">Select Level</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="PhD">PhD</option>
                    <option value="Foundation">Foundation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-ink uppercase tracking-widest">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your goals..."
                  className="w-full bg-neutral border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all resize-none"
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
                    Submit Application <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-12 lg:pl-12">
            <div>
              <h3 className="text-3xl font-bold text-ink mb-6">Why Apply Through Us?</h3>
              <p className="text-muted text-lg leading-relaxed mb-10">
                We have a proven track record of helping Nigerian students secure admissions and visas for top-tier international universities.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Free Initial Counseling', desc: 'Get expert advice on your study options without any initial cost.' },
                  { title: 'High Success Rate', desc: 'Our visa success rate is one of the highest in the industry.' },
                  { title: 'Direct University Links', desc: 'We work directly with university admission offices for faster processing.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink mb-2">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ink text-white p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">Need Immediate Help?</h4>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Call our expert counselors directly for any urgent inquiries.
                </p>
                <div className="flex items-center gap-4 text-primary font-bold text-xl">
                  📞 +234 800 123 4567
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
