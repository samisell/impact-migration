import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Facebook, Instagram, Linkedin, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO, COUNTRIES } from '../constants';
import { NewsletterSubscribe } from './NewsletterSubscribe';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setDestDropdownOpen(false);
    setMobileDestOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations', hasSubmenu: true },
    { name: 'Services', path: '/services' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo/logo.png" alt="Impact Migration Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.hasSubmenu) {
              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setDestDropdownOpen(true)}
                  onMouseLeave={() => setDestDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${isActive(link.path) ? 'text-primary font-bold' : 'text-ink'}`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${destDropdownOpen ? 'rotate-180 text-primary' : ''}`} />
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {destDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 w-64 pt-2 z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1">
                          <Link
                            to="/destinations"
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors uppercase tracking-wider"
                          >
                            <Globe className="w-4 h-4" />
                            <span>All Study Destinations</span>
                          </Link>
                          <div className="h-px bg-gray-100 my-1" />
                          {COUNTRIES.map((country) => (
                            <Link
                              key={country.id}
                              to={`/destinations/${country.slug}`}
                              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                                location.pathname === `/destinations/${country.slug}`
                                  ? 'bg-primary text-white shadow-md'
                                  : 'text-ink hover:bg-neutral hover:text-primary'
                              }`}
                            >
                              <span>Study in {country.name}</span>
                              <span className="text-[10px] opacity-60">View Details</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary font-bold' : 'text-ink'}`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/login"
            className="text-sm font-bold text-ink hover:text-primary transition-colors px-2"
          >
            Login
          </Link>
          <Link to="/apply" className="btn-primary py-2 px-5 text-sm">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-ink p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.hasSubmenu) {
                  return (
                    <div key={link.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          className={`text-lg font-medium ${isActive(link.path) ? 'text-primary font-bold' : 'text-ink'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() => setMobileDestOpen(!mobileDestOpen)}
                          className="p-1.5 text-ink hover:text-primary focus:outline-none"
                          aria-label="Toggle country sub menu"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDestOpen ? 'rotate-180 text-primary' : ''}`} />
                        </button>
                      </div>

                      {/* Mobile Submenu Accordion */}
                      <AnimatePresence>
                        {mobileDestOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-primary/20 space-y-2.5 pt-1 pb-2 overflow-hidden"
                          >
                            <Link
                              to="/destinations"
                              className="block text-sm font-bold text-primary py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              All Destinations Overview
                            </Link>
                            {COUNTRIES.map((country) => (
                              <Link
                                key={country.id}
                                to={`/destinations/${country.slug}`}
                                className={`block text-sm font-medium py-1 transition-colors ${
                                  location.pathname === `/destinations/${country.slug}`
                                    ? 'text-primary font-bold'
                                    : 'text-muted hover:text-ink'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                Study in {country.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-medium ${isActive(link.path) ? 'text-primary font-bold' : 'text-ink'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/login"
                className="text-lg font-bold text-ink pt-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
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
    <footer className="bg-ink text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Banner */}
        <div className="mb-16">
          <NewsletterSubscribe variant="banner" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo/logo.png" alt="Impact Migration Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering Nigerian students to achieve their dreams of studying abroad with confidence and ease.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.096-2.8V9.41a6.332 6.332 0 1 0 5.541 6.262V9.432a8.2 8.2 0 0 0 4.77 1.526V7.522a4.83 4.83 0 0 1-1.000-.836z" />
                </svg>
              </a>
              <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" aria-label="LinkedIn">
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
              <li><Link to="/appointment" className="hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/apply" className="hover:text-primary transition-colors">Apply / Partner</Link></li>
              <li><Link to="/register" className="hover:text-primary transition-colors">Create Account</Link></li>
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
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 ease-in-out text-sm font-bold">
          Chat with us
        </span>
      </a>
    </div>
  );
};