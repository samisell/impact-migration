import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from 'lucide-react';

const TESTIMONIAL_IMAGES = [
  '/test1.png',
  '/test2.png',
  '/test3.png',
  '/test4.png',
  '/test5.png',
  '/test6.png',
  '/test7.png',
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalImages = TESTIMONIAL_IMAGES.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalImages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  // Get index for visible cards (showing 3 cards on desktop view centered on current)
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + totalImages) % totalImages;
    const current = currentIndex;
    const next = (currentIndex + 1) % totalImages;
    return { prev, current, next };
  };

  const { prev, current, next } = getVisibleIndices();

  return (
    <section className="py-20 bg-neutral overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">
            Our Visa Success Stories
          </h2>
          <p className="text-muted text-sm md:text-base">
            Real moments of success with our happy clients celebrating their visa approvals.
          </p>
        </div>

        {/* Desktop Carousel View (3 Cards) */}
        <div 
          className="relative max-w-5xl mx-auto hidden md:block"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-3 gap-6 items-center min-h-[440px]">
            {[prev, current, next].map((imgIndex, posIndex) => {
              const isCenter = posIndex === 1;
              return (
                <motion.div
                  key={`${imgIndex}-${posIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.7, 
                    scale: isCenter ? 1.05 : 0.92,
                    y: isCenter ? -8 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedImage(TESTIMONIAL_IMAGES[imgIndex]);
                    } else {
                      setCurrentIndex(imgIndex);
                    }
                  }}
                  className={`relative cursor-pointer group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                    isCenter ? 'ring-2 ring-primary/20 z-10' : 'z-0 blur-[0.3px]'
                  }`}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={TESTIMONIAL_IMAGES[imgIndex]}
                      alt={`Visa Success ${imgIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5" />
                        Click to view full image
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-ink shadow-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-100 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-ink shadow-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center border border-gray-100 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile View (Single Active Card) */}
        <div 
          className="relative max-w-sm mx-auto block md:hidden"
          onTouchStart={() => setIsAutoPlaying(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(TESTIMONIAL_IMAGES[currentIndex])}
              className="rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100 relative group cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={TESTIMONIAL_IMAGES[currentIndex]}
                  alt={`Visa Success ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Arrows */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="w-10 h-10 rounded-full bg-white text-ink shadow-md flex items-center justify-center border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-muted">
              {currentIndex + 1} / {totalImages}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="w-10 h-10 rounded-full bg-white text-ink shadow-md flex items-center justify-center border border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {TESTIMONIAL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image modal"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
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
    </section>
  );
};
