import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, GraduationCap, DollarSign, FileText, Home as HomeIcon } from 'lucide-react';
import { COUNTRIES } from '../constants';

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
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-ink mb-8">Quick Facts</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Tuition Range</p>
                      <p className="text-lg font-bold text-ink">{country.tuitionRange}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <HomeIcon size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Cost of Living</p>
                      <p className="text-lg font-bold text-ink">{country.costOfLiving}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <FileText size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Visa Type</p>
                      <p className="text-lg font-bold text-ink">Student Visa (F-1/Tier 4/Study Permit)</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/apply" className="btn-primary w-full mt-12 flex justify-center items-center gap-2">
                  Start Application <ArrowRight size={18} />
                </Link>
              </div>
              
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
