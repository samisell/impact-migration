import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo/logo.png" alt="Impact Migration Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-ink'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/apply" className="btn-primary py-2 px-5 text-sm">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${isActive(link.path) ? 'text-primary' : 'text-ink'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo/logo.png" alt="Impact Migration Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering Nigerian students to achieve their dreams of studying abroad with confidence and ease.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/impactmigrations?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.instagram.com/impactmigrations?igsh=a3RkYmV6Mm16NHFl" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/impact-migration-consults" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Study Destinations</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & Resources</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Destinations</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link to="/destinations/uk" className="hover:text-primary transition-colors">United Kingdom</Link></li>
              <li><Link to="/destinations/canada" className="hover:text-primary transition-colors">Canada</Link></li>
              <li><Link to="/destinations/usa" className="hover:text-primary transition-colors">USA</Link></li>
              <li><Link to="/destinations/malta" className="hover:text-primary transition-colors">Malta</Link></li>
              <li><Link to="/destinations/poland" className="hover:text-primary transition-colors">Poland</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <span className="text-primary">📍</span>
                {CONTACT_INFO.address}
              </li>
              <li className="flex gap-3">
                <span className="text-primary">📞</span>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✉️</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2025 Impact Migration. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};