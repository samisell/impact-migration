import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send, Loader2, Building2, UserCheck, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { databases } from '../lib/appwrite';
import { ID } from 'appwrite';
import { Lead, PartnerLead } from '../types';
import { sendEmailNotification } from '../lib/email';

export const Apply = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'partner'>('student');

  // Student Application Form State
  const [studentForm, setStudentForm] = useState<Lead>({
    fullName: '',
    email: '',
    phone: '',
    courseType: '',
    courseOfInterest: '',
    ieltsScore: '',
    message: ''
  });

  // Partner Application Form State
  const [partnerForm, setPartnerForm] = useState<PartnerLead>({
    type: 'Corporate',
    corporateName: '',
    corporateAddress: '',
    corporateEmail: '',
    corporatePhone: '',
    yearOfRegistration: '',
    numberOfEmployees: '',
    contactPersonName: '',
    contactPersonPosition: '',
    contactPersonPhone: '',
    contactPersonWhatsapp: '',
    contactPersonEmail: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedType, setSubmittedType] = useState<'student' | 'partner'>('student');
  const [error, setError] = useState<string | null>(null);

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_APPLICATIONS_COLLECTION_ID || import.meta.env.NEXT_PUBLIC_APPWRITE_APPLICATIONS_COLLECTION_ID;

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPartnerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send email notification to info@impactmigration.com
      await sendEmailNotification({
        formName: 'Student Application Form',
        subject: `New Application - ${studentForm.fullName}`,
        senderName: studentForm.fullName,
        senderEmail: studentForm.email,
        data: {
          'Full Name': studentForm.fullName,
          'Email': studentForm.email,
          'Phone': studentForm.phone,
          'Course Type': studentForm.courseType,
          'Course of Interest': studentForm.courseOfInterest,
          'IELTS Score': studentForm.ieltsScore,
          'Additional Info': studentForm.message
        }
      });

      if (databaseId && collectionId) {
        await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          {
            ...studentForm,
            createdAt: new Date().toISOString()
          }
        );
      } else {
        console.log('Appwrite not configured. Student Form:', studentForm);
      }
      setSubmittedType('student');
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error submitting student application:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send email notification to info@impactmigration.com
      await sendEmailNotification({
        formName: 'Partner Registration Form',
        subject: `New Partner Application - ${partnerForm.corporateName}`,
        senderName: partnerForm.contactPersonName,
        senderEmail: partnerForm.contactPersonEmail || partnerForm.corporateEmail,
        data: {
          'Type': partnerForm.type,
          'Corporate Name': partnerForm.corporateName,
          'Corporate Email': partnerForm.corporateEmail,
          'Corporate Phone': partnerForm.corporatePhone,
          'Year of Registration': partnerForm.yearOfRegistration,
          'Number of Employees': partnerForm.numberOfEmployees,
          'Corporate Address': partnerForm.corporateAddress,
          'Contact Person Name': partnerForm.contactPersonName,
          'Contact Person Position': partnerForm.contactPersonPosition,
          'Contact Person Phone': partnerForm.contactPersonPhone,
          'Contact Person WhatsApp': partnerForm.contactPersonWhatsapp,
          'Contact Person Email': partnerForm.contactPersonEmail
        }
      });

      if (databaseId && collectionId) {
        await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          {
            ...partnerForm,
            createdAt: new Date().toISOString()
          }
        );
      } else {
        console.log('Appwrite not configured. Partner Form:', partnerForm);
      }
      setSubmittedType('partner');
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error submitting partner application:', err);
      setError('Something went wrong. Please try again later.');
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
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-ink mb-4">
            {submittedType === 'student' ? 'Application Received!' : 'Partner Request Submitted!'}
          </h2>
          <p className="text-muted text-base mb-8 leading-relaxed">
            {submittedType === 'student'
              ? 'Thank you for contacting Impact Migration. Our experienced International Student Consultants will contact you shortly.'
              : 'Thank you for your interest in partnering with Impact Migration. Our corporate relations team will review your details and reach out soon.'}
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="btn-primary w-full py-4 font-bold"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-24 bg-neutral/30">
      {/* Top Banner / Intro Header */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Impact Migration Consults</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-ink mb-4 leading-tight"
          >
            Apply <span className="text-primary">Now</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Our experienced International Student Consultants are here to help you. Fill out the form below, and one of our consultants will contact you shortly.
          </motion.p>

          {/* Form Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white shadow-sm border border-gray-200 gap-2">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'student'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-ink'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Application</span>
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'partner'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-ink'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Form Body */}
      <section className="container mx-auto px-4 max-w-4xl">
        <AnimatePresence mode="wait">
          {activeTab === 'student' ? (
            /* Student Application Form */
            <motion.div
              key="student-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h2 className="text-2xl font-extrabold text-ink">Student Application Form</h2>
                <p className="text-sm text-muted mt-1">
                  Please provide your personal and academic details accurately.
                </p>
              </div>

              <form onSubmit={handleStudentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name* */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={studentForm.fullName}
                      onChange={handleStudentChange}
                      placeholder="Enter your full name"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email* */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={studentForm.email}
                      onChange={handleStudentChange}
                      placeholder="e.g. example@gmail.com"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone* */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={studentForm.phone}
                      onChange={handleStudentChange}
                      placeholder="e.g. +234 814 916 6564"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  {/* Course Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Course Type
                    </label>
                    <select
                      name="courseType"
                      value={studentForm.courseType}
                      onChange={handleStudentChange}
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    >
                      <option value="">Select Course Type</option>
                      <option value="Undergraduate">Undergraduate Degree</option>
                      <option value="Postgraduate">Postgraduate / Master's</option>
                      <option value="PhD">PhD / Doctorate</option>
                      <option value="Diploma">Diploma / Advanced Diploma</option>
                      <option value="Foundation">Foundation Program</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Course */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Course
                    </label>
                    <input
                      type="text"
                      name="courseOfInterest"
                      value={studentForm.courseOfInterest}
                      onChange={handleStudentChange}
                      placeholder="e.g. Computer Science, Public Health, Nursing"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  {/* IELTS Score */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      What is your IELTS score?
                    </label>
                    <input
                      type="text"
                      name="ieltsScore"
                      value={studentForm.ieltsScore}
                      onChange={handleStudentChange}
                      placeholder="Optional, if available (e.g. 7.0)"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                    <p className="text-[11px] text-muted italic">Optional, if available</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={studentForm.message}
                    onChange={handleStudentChange}
                    placeholder="Provide any additional details or specific requirements regarding your application..."
                    className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base font-extrabold tracking-wide uppercase shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <span>SUBMIT APPLICATION</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            /* Partner Registration Form */
            <motion.div
              key="partner-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="mb-8 pb-6 border-b border-gray-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Corporate Collaboration</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink">
                  Do you want to partner with Impact Migration?
                </h2>
                <p className="text-sm text-muted mt-1">
                  Sign up here to join our global network of educational and corporate partners.
                </p>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                {/* 1. Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    required
                    value={partnerForm.type}
                    onChange={handlePartnerChange}
                    className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  >
                    <option value="Corporate">Corporate / Agency</option>
                    <option value="Educational Institution">Educational Institution / University</option>
                    <option value="Recruitment Agent">Recruitment Agent / Affiliate</option>
                    <option value="NGO / Non-Profit">NGO / Non-Profit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Corporate Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Corporate Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="corporateName"
                      required
                      value={partnerForm.corporateName}
                      onChange={handlePartnerChange}
                      placeholder="Company / Institution Name"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="corporateEmail"
                      required
                      value={partnerForm.corporateEmail}
                      onChange={handlePartnerChange}
                      placeholder="official@company.com"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Corporate Phone
                    </label>
                    <input
                      type="tel"
                      name="corporatePhone"
                      value={partnerForm.corporatePhone}
                      onChange={handlePartnerChange}
                      placeholder="Corporate Phone Number"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Year of Registration
                    </label>
                    <input
                      type="text"
                      name="yearOfRegistration"
                      value={partnerForm.yearOfRegistration}
                      onChange={handlePartnerChange}
                      placeholder="e.g. 2018"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Number of Employees
                    </label>
                    <select
                      name="numberOfEmployees"
                      value={partnerForm.numberOfEmployees}
                      onChange={handlePartnerChange}
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    >
                      <option value="">Select Range</option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-50">11 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="201-500">201 - 500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Corporate Address
                    </label>
                    <input
                      type="text"
                      name="corporateAddress"
                      value={partnerForm.corporateAddress}
                      onChange={handlePartnerChange}
                      placeholder="Physical Address / Location"
                      className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Contact Person Details */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-base font-bold text-ink mb-4">Contact Person Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        Full Name of Contact Person <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPersonName"
                        required
                        value={partnerForm.contactPersonName}
                        onChange={handlePartnerChange}
                        placeholder="Contact Person Full Name"
                        className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        Position of Contact Person
                      </label>
                      <input
                        type="text"
                        name="contactPersonPosition"
                        value={partnerForm.contactPersonPosition}
                        onChange={handlePartnerChange}
                        placeholder="e.g. Managing Director, Agent Relations Manager"
                        className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="contactPersonPhone"
                        value={partnerForm.contactPersonPhone}
                        onChange={handlePartnerChange}
                        placeholder="Direct Phone Number"
                        className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="contactPersonWhatsapp"
                        value={partnerForm.contactPersonWhatsapp}
                        onChange={handlePartnerChange}
                        placeholder="WhatsApp Number"
                        className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        Email of Contact Person
                      </label>
                      <input
                        type="email"
                        name="contactPersonEmail"
                        value={partnerForm.contactPersonEmail}
                        onChange={handlePartnerChange}
                        placeholder="Direct Email Address"
                        className="w-full bg-neutral border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base font-extrabold tracking-wide uppercase shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <span>SUBMIT PARTNER REGISTRATION</span>
                      <Building2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Apply;
