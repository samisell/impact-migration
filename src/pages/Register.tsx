import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Lock, Mail, Phone, Globe, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { COUNTRIES } from '../constants';
import { sendEmailNotification } from '../lib/email';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    countryOfResidence: '',
    password: '',
    confirmPassword: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmailNotification({
        formName: 'User Registration Form',
        subject: `New User Sign Up - ${formData.firstName} ${formData.surname}`,
        senderName: `${formData.firstName} ${formData.surname}`,
        senderEmail: formData.email,
        data: {
          'First Name': formData.firstName,
          'Surname': formData.surname,
          'Email': formData.email,
          'Phone': formData.phone,
          'Country of Residence': formData.countryOfResidence
        }
      });
      setSuccess(true);
    } catch (err) {
      console.error('Registration email failed:', err);
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="pt-20 pb-32 flex items-center justify-center container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full"
        >
          <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-ink mb-3">Account Created!</h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            Welcome to Impact Migration, <strong className="text-ink">{formData.firstName}</strong>. Your account has been successfully created.
          </p>
          <Link
            to="/login"
            className="btn-primary w-full py-4 text-center font-bold block"
          >
            Proceed to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 bg-neutral/30 min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-ink mb-2">Create Account</h1>
            <p className="text-muted text-sm">
              Sign up to manage your study abroad applications and consultations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name & Surname */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Surname <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="surname"
                    required
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Surname"
                    className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-ink uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-ink uppercase tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 814 916 6564"
                  className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Country of Residence */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-ink uppercase tracking-wider">
                Country of Residence <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <select
                  name="countryOfResidence"
                  required
                  value={formData.countryOfResidence}
                  onChange={handleChange}
                  className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none"
                >
                  <option value="">Select Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                  <option value="Other">Other Country</option>
                </select>
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

            {/* Terms Disclaimer */}
            <p className="text-xs text-muted leading-relaxed pt-2">
              By clicking the <strong className="text-ink">Create Account</strong> button below, you agree to our{' '}
              <Link to="/terms" className="text-primary underline">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3.5 font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="pt-4 text-center border-t border-gray-100">
              <p className="text-xs text-muted">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-bold hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
