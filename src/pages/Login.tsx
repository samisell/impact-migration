import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmailNotification } from '../lib/email';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmailNotification({
        formName: 'Account Login',
        subject: `Login Activity - ${formData.email}`,
        senderEmail: formData.email,
        data: {
          'Email': formData.email,
          'Timestamp': new Date().toLocaleString()
        }
      });
    } catch (err) {
      console.error('Login email trigger error:', err);
    } finally {
      setIsSubmitting(false);
      navigate('/');
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError('Please enter your email address to reset password.');
      return;
    }
    setError(null);
    setForgotSent(true);

    try {
      await sendEmailNotification({
        formName: 'Password Reset Request',
        subject: `Password Reset Requested - ${formData.email}`,
        senderEmail: formData.email,
        data: {
          'Email': formData.email,
          'Action': 'Password Reset Request',
          'Timestamp': new Date().toLocaleString()
        }
      });
    } catch (err) {
      console.error('Password reset email notification error:', err);
    }
  };

  return (
    <div className="pt-12 pb-24 bg-neutral/30 min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-ink mb-2">Login</h1>
            <p className="text-muted text-sm">
              Sign in to your Impact Migration account.
            </p>
          </div>

          {forgotSent && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Password reset instructions have been sent to <strong>{formData.email}</strong>.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email address */}
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
                  className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-ink uppercase tracking-wider">
                  Password <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-primary font-bold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-neutral border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3.5 font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="pt-4 text-center border-t border-gray-100">
              <p className="text-xs text-muted">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary font-bold hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
