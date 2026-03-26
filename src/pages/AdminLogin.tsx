import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Loader2, Globe, ArrowRight } from 'lucide-react';
import { account } from '../lib/appwrite';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await account.createEmailPasswordSession(email, password);
      navigate('/admin');
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="p-12 md:p-16">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-ink">Impact <span className="text-primary">Admin</span></span>
            </Link>
            <h1 className="text-3xl font-bold text-ink mb-4">Welcome Back</h1>
            <p className="text-muted text-sm">Please enter your credentials to access the dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@impactmigration.com"
                  className="w-full bg-neutral border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-ink uppercase tracking-widest">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-3 py-5"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Login to Dashboard <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <Link to="/" className="text-muted text-sm hover:text-primary transition-colors">
              Back to Website
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
