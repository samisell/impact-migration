import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, GraduationCap, FileText, Award, Plane, Home as HomeIcon } from 'lucide-react';
import { COUNTRIES, SERVICES, PARTNER_LOGOS, HERO_IMAGE } from '../constants';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { HeroSlider } from '../components/HeroSlider';
import { StatsSection } from '../components/StatsSection';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* Key Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/diversity-students-graduation-success-celebration-concept.jpg"
                alt="Impact Migration Team"
                className="rounded-2xl shadow-lg mt-12 h-64 object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <img
                src="/young-adults-meeting-up-study.jpg"
                alt="Impact Migration Success"
                className="rounded-2xl shadow-lg h-64 object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-8 rounded-2xl shadow-2xl text-center">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Years Experience</p>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl font-bold text-ink mb-6 leading-tight">
              Your Gateway to International Education
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Impact Migration is a premier study abroad agency based in Lagos, Nigeria. We specialize in helping students navigate the complexities of international admissions and visa processes.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Expert counseling from experienced advisors',
                'Comprehensive visa application support',
                'Direct partnerships with top universities',
                'Pre-departure and post-arrival assistance'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ink font-medium">
                  <CheckCircle className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Study Destinations</span>
              <h2 className="text-4xl font-bold text-ink leading-tight">
                Explore Popular Study Destinations
              </h2>
            </div>
            <Link to="/destinations" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Destinations <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTRIES.map((country) => (
              <Link key={country.id} to={`/destinations/${country.slug}`} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold mb-1">{country.name}</h3>
                    <p className="text-white/70 text-sm">Explore Opportunities</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl font-bold text-ink mb-6">Comprehensive Support for Your Journey</h2>
            <p className="text-muted text-lg">
              We provide end-to-end services to ensure your study abroad process is as smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="card group hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  {service.icon === 'GraduationCap' && <GraduationCap className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'FileText' && <FileText className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'Award' && <Award className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'Home' && <HomeIcon className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'Plane' && <Plane className="text-primary w-8 h-8 group-hover:text-white" />}
                </div>
                <h3 className="text-xl font-bold text-ink mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories Section */}
      <TestimonialSlider />

      {/* Partners Section - Carousel Slider */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <p className="text-center text-muted text-sm font-semibold uppercase tracking-widest">Our Partner Universities</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 px-6">
                <div className="h-12 flex items-center justify-center">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 w-auto object-contain max-w-[140px]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <GraduationCap className="w-8 h-8 text-primary hidden only-when-img-hidden" />
                </div>
                <span className="text-xs font-bold text-muted uppercase tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
                Ready to Start Your Study Abroad Journey?
              </h2>
              <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
                Join hundreds of successful students who have achieved their dreams with Impact Migration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                  Apply Now
                </Link>
                <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;