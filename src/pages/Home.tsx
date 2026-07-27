import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, GraduationCap, FileText, Award, Plane, Home as HomeIcon } from 'lucide-react';
import { COUNTRIES, SERVICES, PARTNER_LOGOS, HERO_IMAGE } from '../constants';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { HeroSlider } from '../components/HeroSlider';
import { StatsSection } from '../components/StatsSection';

const Home = () => {
  React.useEffect(() => {
    const container = document.getElementById('iasBadge');
    if (!container) return;

    const certNum = container.getAttribute('data-account-id') || '6740';
    if (!container.innerHTML.trim()) {
      fetch(`https://api2.icef.com/public/account/certificate/${certNum}`)
        .then(res => res.json())
        .then(data => {
          if (data?.records?.[0]?.CDN_link_to_IAS_logo__c) {
            const record = data.records[0];
            container.innerHTML = `<a href="https://www.icef.com/agency/${record.Master_Account__c}" target="_blank" rel="noopener noreferrer"><img src="${record.CDN_link_to_IAS_logo__c}" alt="ICEF Accredited Agency Logo" style="width: 120px;"></a>`;
          }
        })
        .catch(err => console.error('ICEF Badge fetch error:', err));
    }

    const scriptId = 'icef-ias-badge-script';
    const scriptSrc = 'https://www-cdn.icef.com/scripts/iasbadgeid.js';
    if (!document.getElementById(scriptId) && !document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

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
                  (e.target as HTMLImageElement).src = "/about-img1.jpg";
                }}
              />
              <img
                src="/young-adults-meeting-up-study.jpg"
                alt="Impact Migration Success"
                className="rounded-2xl shadow-lg h-64 object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/about-img2.jpg";
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
            <ul className="space-y-4 mb-8">
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

            {/* Founder and CEO Profile */}
            <div className="bg-neutral p-6 rounded-2xl border border-gray-200/60 mb-6 flex items-center gap-5 shadow-sm">
              <img
                src="/1.png"
                alt="Samson Ayeni - Founder and CEO"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-primary shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5 text-primary font-bold text-[11px] uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder & CEO</span>
                </div>
                <h4 className="text-xl font-black text-ink leading-tight">SAMSON AYENI</h4>
                <p className="text-muted text-xs md:text-sm mt-1 italic leading-relaxed font-medium">
                  "Our commitment is to open doors to world-class global education and career success with unmatched professional integrity and mentorship."
                </p>
              </div>
            </div>

            {/* ICEF Agency Status Accreditation Badge */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-primary font-bold text-[10px] uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Accreditation</span>
                  </div>
                  <h5 className="font-bold text-ink text-sm md:text-base">ICEF Accredited Agency Status</h5>
                  <p className="text-xs text-muted">Globally recognized standard for international study counselling & compliance.</p>
                </div>
              </div>
              <div className="shrink-0 bg-neutral/50 p-2.5 rounded-xl border border-gray-100 flex items-center justify-center min-w-[150px] min-h-[64px]">
                <span id='iasBadge' data-account-id='6740'></span>
              </div>
            </div>

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
            {COUNTRIES.slice(0, 8).map((country) => (
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