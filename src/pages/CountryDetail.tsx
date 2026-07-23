import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, GraduationCap, ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';
import { COUNTRIES } from '../constants';

const TESTIMONIAL_IMAGES = [
  '/test1.png',
  '/test2.png',
  '/test3.png',
  '/test4.png',
  '/test5.png',
  '/test6.png',
  '/test7.png',
];

const DestinationTestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const total = TESTIMONIAL_IMAGES.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visa Approvals</span>
          </div>
          <h3 className="text-xl font-bold text-ink">Success Stories</h3>
        </div>
        <span className="text-xs font-semibold text-muted bg-neutral px-3 py-1 rounded-full border border-gray-200">
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Main Slide Image */}
      <div 
        className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm group cursor-pointer aspect-[3/4] mb-6"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onClick={() => setSelectedImage(TESTIMONIAL_IMAGES[currentIndex])}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={TESTIMONIAL_IMAGES[currentIndex]}
            alt={`Visa Success Story ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Zoom badge overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <Maximize2 className="w-3.5 h-3.5" />
            Expand Testimonial
          </span>
        </div>

        {/* Navigation buttons overlaid on image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-ink shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-ink shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 mb-6">
        {TESTIMONIAL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-2 bg-primary'
                : 'w-2 h-2 bg-gray-200 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <Link to="/apply" className="btn-primary w-full flex justify-center items-center gap-2">
        Start Application <ArrowRight size={18} />
      </Link>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close testimonial modal"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Visa Success Full View"
                className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CountryDetail = () => {
  const { slug } = useParams();
  const country = COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    return <Navigate to="/destinations" />;
  }

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
              <ArrowRight size={18} className="rotate-180" /> Back to Destinations
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Study in <span className="text-primary">{country.name}</span>
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              {country.overview}
            </p>
            <Link to="/apply" className="btn-primary inline-flex items-center gap-2">
              Apply Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-ink mb-8">Benefits of Studying in {country.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {country.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <CheckCircle size={24} />
                  </div>
                  <span className="font-bold text-ink">{benefit}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-ink mb-8">Top Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {country.universities.map((uni, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <span className="font-bold text-ink">{uni}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-ink mb-8">Visa Requirements</h2>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 mb-16">
              <ul className="space-y-6">
                {country.visaRequirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <DestinationTestimonialSlider />
              
              <div className="bg-ink text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6">Need Help?</h4>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">
                    Our expert counselors are ready to help you with your application for {country.name}.
                  </p>
                  <Link to="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Contact Us <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
