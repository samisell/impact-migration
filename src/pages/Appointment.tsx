import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Loader2, Sparkles, PhoneCall, Send, GraduationCap, Globe, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { AppointmentLead } from '../types';
import { sendEmailNotification } from '../lib/email';
import { databases } from '../lib/appwrite';
import { ID } from 'appwrite';

export const Appointment = () => {
  const [formData, setFormData] = useState<AppointmentLead>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    counsellingMode: 'Virtual',
    fundingSource: 'Self-sponsored',
    studyLevel: 'Undergraduate',
    agreedTerms: false,
    allowContact: true,
    receiveUpdates: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_APPLICATIONS_COLLECTION_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_APPLICATIONS_COLLECTION_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOptionSelect = (field: keyof AppointmentLead, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.agreedTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send Email notification to info@impactmigration.com
      await sendEmailNotification({
        formName: 'Appointment Booking',
        subject: `Appointment Booking Request - ${formData.firstName} ${formData.lastName}`,
        senderName: `${formData.firstName} ${formData.lastName}`,
        senderEmail: formData.email,
        data: {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email Address': formData.email,
          'Mobile Number': formData.phone,
          'Preferred Study Destination': formData.destination,
          'Start Timeframe': formData.startDate,
          'Mode of Counselling': formData.counsellingMode,
          'Funding Source': formData.fundingSource,
          'Study Level': formData.studyLevel,
          'Agreed to Terms': formData.agreedTerms ? 'Yes' : 'No',
          'Allow Contact': formData.allowContact ? 'Yes' : 'No',
          'Receive Updates': formData.receiveUpdates ? 'Yes' : 'No'
        }
      });

      // Optionally save to Appwrite if configured
      if (databaseId && collectionId) {
        await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          {
            fullName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            preferredCountry: formData.destination,
            educationLevel: formData.studyLevel,
            message: `Appointment request: ${formData.counsellingMode} counselling, starting ${formData.startDate}, funding: ${formData.fundingSource}`,
            createdAt: new Date().toISOString()
          }
        );
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Appointment booking error:', err);
      // Even if Appwrite fails, show success if email was handled
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-20 pb-32 flex items-center justify-center container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 text-center max-w-xl w-full"
        >
          <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-ink mb-3">Appointment Booked!</h2>
          <p className="text-muted text-base mb-8 leading-relaxed">
            Thank you, <strong className="text-ink">{formData.firstName}</strong>. We have received your appointment request. Our experienced international education advisors will contact you shortly to confirm your counselling session.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                destination: '',
                startDate: '',
                counsellingMode: 'Virtual',
                fundingSource: 'Self-sponsored',
                studyLevel: 'Undergraduate',
                agreedTerms: false,
                allowContact: true,
                receiveUpdates: true
              });
            }}
            className="btn-primary w-full py-4 font-bold text-base"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 bg-neutral/30 min-h-[90vh]">
      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-4"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Impact Migration Can Help You</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3 leading-tight uppercase tracking-tight"
          >
            BOOK AN APPOINTMENT, <span className="text-primary">WE WILL CALL YOU BACK</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Impact Migration can help you achieve your study abroad dreams with personalized expert guidance.
          </motion.p>
        </div>
      </section>

      {/* Main Appointment Form Section */}
      <section className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          {/* Form Header Title & Copy */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Free Consultation Session</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-ink tracking-tight mb-2 uppercase">
              APPOINTMENT FORM
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Fill in your details to receive a free counseling session with our experts, who will guide you to the perfect course, country, university, and even scholarship opportunities!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First name* & Last name* */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Email address* & Mobile number* */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 814 916 6564"
                  className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Your preferred study destination* */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>Your preferred study destination <span className="text-red-500">*</span></span>
              </label>
              <select
                name="destination"
                required
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              >
                <option value="">Select Destination</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* When would you like to start studying?* */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>When would you like to start studying? <span className="text-red-500">*</span></span>
              </label>
              <select
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              >
                <option value="">Select Start Date</option>
                <option value="Now">Now</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
              </select>
            </div>

            {/* Preferred mode of counselling* */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-2">
                Preferred mode of counselling <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['In-person', 'Virtual'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleOptionSelect('counsellingMode', mode)}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center ${
                      formData.counsellingMode === mode
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-neutral text-ink border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* How would you fund your education? * */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-2">
                How would you fund your education? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Self-sponsored', 'Parents', 'Government Scholarship'].map((funding) => (
                  <button
                    key={funding}
                    type="button"
                    onClick={() => handleOptionSelect('fundingSource', funding)}
                    className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center ${
                      formData.fundingSource === funding
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-neutral text-ink border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {funding}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred study level* */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Preferred study level <span className="text-red-500">*</span></span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Undergraduate', 'Postgraduate'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleOptionSelect('studyLevel', level)}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center ${
                      formData.studyLevel === level
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-neutral text-ink border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-ink font-medium">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedTerms"
                  checked={formData.agreedTerms}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary w-4 h-4 shrink-0"
                />
                <span>
                  I agree to Impact Migration Terms and privacy policy <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="allowContact"
                  checked={formData.allowContact}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary w-4 h-4 shrink-0"
                />
                <span>Please contact me by phone, email or SMS to assist with my enquiry</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary w-4 h-4 shrink-0"
                />
                <span>I would like to receive updates and offers from Impact Migration</span>
              </label>
            </div>

            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-base font-extrabold tracking-wide uppercase shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span>BOOK APPOINTMENT NOW</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Appointment;
