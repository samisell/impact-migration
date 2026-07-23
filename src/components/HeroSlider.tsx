import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Sparkles, GraduationCap, Award, Gift, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

interface HeroSlide {
  id: number;
  badge: string;
  badgeIcon: React.ElementType;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgGradient: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'Career Opportunities Abroad',
    badgeIcon: Compass,
    title: 'Are you ready to start a new career abroad?',
    description: 'Let’s make your travel dream a reality.',
    primaryCtaText: 'Apply Now',
    primaryCtaLink: '/apply',
    secondaryCtaText: 'Explore Destinations',
    secondaryCtaLink: '/destinations',
    bgGradient: 'from-primary/10 via-emerald-500/5 to-white',
  },
  {
    id: 2,
    badge: '100% Free Perks Package',
    badgeIcon: Gift,
    title: 'Enjoy free consultation, free document evaluation, free statement of purpose and free 3 backup courses per application.',
    description: 'Maximized admission chances with zero hidden fees for evaluations and SOP guidance.',
    primaryCtaText: 'APPLY NOW!',
    primaryCtaLink: '/apply',
    bgGradient: 'from-blue-600/10 via-primary/5 to-white',
  },
  {
    id: 3,
    badge: 'End-to-End Educational Consultancy',
    badgeIcon: GraduationCap,
    title: 'Complete Student Support From Admission To Post-Landing',
    description: 'Impact Migration is a firm that offers educational consulting services to students, helping them with everything from admissions counseling, visa advice, accommodation, to post-landing assistance.',
    primaryCtaText: 'APPLY NOW!',
    primaryCtaLink: '/apply',
    bgGradient: 'from-emerald-600/10 via-teal-500/5 to-white',
  },
  {
    id: 4,
    badge: 'Scholarship Guidance',
    badgeIcon: Award,
    title: 'Full and partial scholarships in the US, Canada, and the UK.',
    description: 'For additional information or to apply, get in touch with us today.',
    primaryCtaText: 'APPLY NOW!',
    primaryCtaLink: '/apply',
    bgGradient: 'from-amber-500/10 via-primary/5 to-white',
  },
  {
    id: 5,
    badge: 'Your Trusted Study Abroad Partner',
    badgeIcon: Sparkles,
    title: "Let's help your desire to study abroad come true.",
    description: 'Turn your global academic ambitions into success with our proven visa application guidance.',
    primaryCtaText: 'APPLY NOW!',
    primaryCtaLink: '/apply',
    bgGradient: 'from-primary/10 via-indigo-500/5 to-white',
  },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const activeSlide = SLIDES[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section 
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden transition-colors duration-1000 bg-gradient-to-br from-primary/5 via-white to-neutral"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slide Text Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[380px] md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide border border-primary/20 shadow-sm">
                  <BadgeIcon className="w-4 h-4 text-primary" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.15] tracking-tight">
                  {activeSlide.title}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
                  {activeSlide.description}
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={activeSlide.primaryCtaLink}
                    className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all"
                  >
                    <span>{activeSlide.primaryCtaText}</span>
                    <ArrowRight size={20} />
                  </Link>

                  {activeSlide.secondaryCtaText && activeSlide.secondaryCtaLink && (
                    <Link
                      to={activeSlide.secondaryCtaLink}
                      className="btn-outline inline-flex items-center gap-2 px-6 py-4 text-base font-semibold"
                    >
                      {activeSlide.secondaryCtaText}
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation & Indicators */}
            <div className="pt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="w-10 h-10 rounded-full bg-white text-ink shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-full bg-white text-ink shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === current
                        ? 'w-9 h-2.5 bg-primary'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs font-semibold text-muted ml-auto sm:ml-0">
                0{current + 1} / 0{SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right Column (Visual Image Showcase & Stats) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={HERO_IMAGE}
                  alt="Impact Migration Student"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white/80">Impact Migration Consults</p>
                      <p className="text-sm font-bold">Your Utmost Desire Is Our Success</p>
                    </div>
                    <div className="bg-primary px-3 py-1 rounded-full text-xs font-bold">
                      Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-gray-100"
              >
                <div className="bg-emerald-100 p-2.5 rounded-xl">
                  <CheckCircle className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Visa Approval</p>
                  <p className="text-sm font-bold text-ink">98.5% Success Rate</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-gray-100"
              >
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Global Admissions</p>
                  <p className="text-sm font-bold text-ink">500+ Students Placed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
