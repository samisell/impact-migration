import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FileText, Award, Plane, Home, ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Our <span className="text-primary">Expert Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            We provide a comprehensive range of services to ensure your study abroad journey is successful and stress-free.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                {service.icon === 'GraduationCap' && <GraduationCap className="text-primary w-10 h-10 group-hover:text-white" />}
                {service.icon === 'FileText' && <FileText className="text-primary w-10 h-10 group-hover:text-white" />}
                {service.icon === 'Award' && <Award className="text-primary w-10 h-10 group-hover:text-white" />}
                {service.icon === 'Home' && <Home className="text-primary w-10 h-10 group-hover:text-white" />}
                {service.icon === 'Plane' && <Plane className="text-primary w-10 h-10 group-hover:text-white" />}
              </div>
              <h3 className="text-3xl font-bold text-ink mb-6">{service.title}</h3>
              <p className="text-muted text-lg leading-relaxed mb-10">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Personalized guidance',
                  'Expert documentation',
                  'Timely processing',
                  'Success-oriented approach'
                ].map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-ink font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-ink text-white py-24 rounded-[3rem] mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Simple Process</h2>
            <p className="text-white/70 text-lg">
              We have streamlined our process to make it as easy as possible for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your goals and academic background.' },
              { step: '02', title: 'Admission', desc: 'We help you apply and secure an offer letter from your choice university.' },
              { step: '03', title: 'Visa Processing', desc: 'Expert guidance on documentation and visa application submission.' },
              { step: '04', title: 'Departure', desc: 'Pre-departure briefing and travel support for your new journey.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-primary font-bold text-5xl mb-6 opacity-30">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-6 text-primary/20">
                    <ArrowRight size={40} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
