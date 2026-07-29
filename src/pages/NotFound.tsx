import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Compass, ArrowLeft, Calendar, HelpCircle, MapPin, Globe } from 'lucide-react';
import { COUNTRIES } from '../constants';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-canvas min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto text-center">
        
        {/* Animated Globe / Error Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary relative shadow-inner">
            <Compass className="w-14 h-14 sm:w-18 sm:h-18 animate-pulse" />
            <div className="absolute -bottom-2 -right-2 bg-primary text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-full shadow-md border-2 border-white">
              404
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-dashed animate-[spin_20s_linear_infinite] -m-2" />
        </motion.div>

        {/* Heading & Explanation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 mb-10"
        >
          <span className="text-primary font-bold text-sm sm:text-base uppercase tracking-widest block">
            Destination Not Found
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight">
            Looks Like You've Wandered Off the Map
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The study abroad route or page you are looking for doesn't exist, has been renamed, or was moved. Don't worry—our expert guidance is just a click away!
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-ink font-bold shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-7 py-3.5 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary/10 text-primary font-bold hover:bg-primary/15 transition-all text-sm sm:text-base"
          >
            <Globe size={18} />
            Explore Destinations
          </Link>
        </motion.div>

        {/* Popular Destinations Quick Jump */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 text-left mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-ink flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                Popular Study Destinations
              </h2>
              <p className="text-muted text-xs sm:text-sm">
                Jump right back on track by exploring our top accredited student destinations
              </p>
            </div>
            <Link
              to="/destinations"
              className="text-primary font-bold text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              View All ({COUNTRIES.length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {COUNTRIES.slice(0, 8).map((country) => (
              <Link
                key={country.id}
                to={`/destinations/${country.slug}`}
                className="group flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-ink text-sm truncate group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <span className="text-[11px] text-muted block truncate">
                    {country.universities.length}+ Universities
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Help Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-ink to-ink/90 text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <HelpCircle className="text-secondary" size={22} />
              Need Personal Guidance?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Our educational counselors are available to answer your questions, evaluate your profile, and guide your university and visa application process.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/book-appointment"
              className="btn-secondary w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm shadow-md"
            >
              <Calendar size={16} />
              Book Free Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
