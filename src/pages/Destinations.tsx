import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe } from 'lucide-react';
import { COUNTRIES } from '../constants';
import { TestimonialSlider } from '../components/TestimonialSlider';

const Destinations = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Study in Your <span className="text-primary">Dream Country</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Explore a wide range of study destinations across the globe. We help you choose the best country that fits your academic and career aspirations.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/destinations/${country.slug}`}>
                <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all border border-gray-100">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-primary/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/20">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{country.name}</h3>
                    <p className="text-white/80 text-sm mb-8 line-clamp-2 leading-relaxed">
                      {country.overview}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                      Explore Opportunities <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          
          {/* Placeholder for "Other European Countries" */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mb-8 text-gray-400">
              <Globe size={40} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-4">Other European Countries</h3>
            <p className="text-muted text-sm mb-8 leading-relaxed">
              We also process admissions for Germany, Ireland, France, and other European nations.
            </p>
            <Link to="/contact" className="btn-outline w-full">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Slide Images Section */}
      <section className="mt-24">
        <TestimonialSlider />
      </section>
    </div>
  );
};

export default Destinations;
