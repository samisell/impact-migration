import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, GraduationCap, FileText, Award, Plane } from 'lucide-react';
import { COUNTRIES, SERVICES, PARTNER_LOGOS, HERO_IMAGE } from '../constants';

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
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 bg-gradient-to-br from-primary/5 to-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Trusted Study Abroad Agency in Lagos
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-ink leading-tight mb-6">
              Study Abroad with <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-muted text-lg lg:text-xl mb-10 leading-relaxed max-w-lg">
              Empowering Nigerian students to achieve their dreams of studying in top universities across the UK, Canada, USA, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link to="/destinations" className="btn-outline flex items-center justify-center gap-2">
                Explore Destinations
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-bold text-ink">500+</span> Students placed successfully
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Happy Student"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl z-0"></div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-12 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Visa Success Rate</p>
                  <p className="text-sm font-bold text-ink">98.5% Success</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/about-img1.jpg"
                alt="Impact Migration Team"
                className="rounded-2xl shadow-lg mt-12"
                referrerPolicy="no-referrer"
              />
              <img
                src="/about-img2.jpg"
                alt="Impact Migration Success"
                className="rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="card group hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  {service.icon === 'GraduationCap' && <GraduationCap className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'FileText' && <FileText className="text-primary w-8 h-8 group-hover:text-white" />}
                  {service.icon === 'Award' && <Award className="text-primary w-8 h-8 group-hover:text-white" />}
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

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl font-bold text-ink mb-6">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chidi Okoro',
                university: 'University of Hertfordshire, UK',
                text: 'Impact Migration made my dream of studying in the UK a reality. Their visa assistance was top-notch and I got my visa in record time.',
                image: 'https://i.pravatar.cc/150?u=chidi'
              },
              {
                name: 'Amina Bello',
                university: 'York University, Canada',
                text: 'The counseling session I had with Impact Migration was eye-opening. They helped me choose the right course and university that fit my career goals.',
                image: 'https://i.pravatar.cc/150?u=amina'
              },
              {
                name: 'Tunde Williams',
                university: 'Arizona State University, USA',
                text: 'I highly recommend Impact Migration for anyone looking to study abroad. They are professional, transparent, and very helpful throughout the process.',
                image: 'https://i.pravatar.cc/150?u=tunde'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-yellow-400 w-4 h-4 fill-current" />)}
                </div>
                <p className="text-ink font-medium italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-ink">{testimonial.name}</h4>
                    <p className="text-xs text-muted">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <div key={index} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 px-4">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
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