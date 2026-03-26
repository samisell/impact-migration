import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-12 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Empowering Your <span className="text-primary">Global Education</span> Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Impact Migration is a leading study abroad agency in Lagos, Nigeria, dedicated to providing students with the best opportunities for international education.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/about-main/800/600"
              alt="Impact Migration Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-primary font-bold text-4xl mb-1">500+</p>
              <p className="text-muted text-sm font-semibold uppercase tracking-widest">Successful Placements</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-ink mb-6">Our Story</h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between Nigerian students and global education, Impact Migration has grown into a trusted name in the industry. We understand the challenges students face when applying to international universities and we are here to simplify the process.
            </p>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Our team of expert counselors and visa specialists work tirelessly to ensure that every student we serve gets the best possible outcome for their academic and career goals.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-ink">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-ink">98% Visa Success</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-ink">Global Network</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-ink">Student Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral py-24 mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-ink mb-6">Our Mission</h3>
              <p className="text-muted text-lg leading-relaxed">
                To provide accessible, transparent, and expert guidance to Nigerian students, helping them secure admissions and visas for top-tier international universities.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-ink mb-6">Our Vision</h3>
              <p className="text-muted text-lg leading-relaxed">
                To be the most trusted and preferred study abroad agency in Africa, recognized for our integrity, excellence, and commitment to student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-ink mb-6">Why Choose Impact Migration?</h2>
          <p className="text-muted text-lg">
            We go beyond just processing applications. We are your partners in success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Personalized Counseling',
              description: 'We take the time to understand your goals and provide tailored advice that fits your unique profile.',
              icon: <Users className="w-6 h-6" />
            },
            {
              title: 'Proven Success Rate',
              description: 'Our high visa success rate and student placement record speak for our expertise and dedication.',
              icon: <CheckCircle className="w-6 h-6" />
            },
            {
              title: 'End-to-End Support',
              description: 'From choosing the right course to settling in your new country, we are with you every step of the way.',
              icon: <Target className="w-6 h-6" />
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-ink mb-4">{item.title}</h4>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-ink mb-6">Meet Our Expert Team</h2>
          <p className="text-muted text-lg">
            The dedicated professionals behind your study abroad success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: 'Oluwaseun Ajayi', role: 'CEO & Founder', image: 'https://i.pravatar.cc/300?u=seun' },
            { name: 'Blessing Okon', role: 'Head of Admissions', image: 'https://i.pravatar.cc/300?u=blessing' },
            { name: 'Ibrahim Musa', role: 'Visa Specialist', image: 'https://i.pravatar.cc/300?u=ibrahim' },
            { name: 'Sarah Peters', role: 'Student Counselor', image: 'https://i.pravatar.cc/300?u=sarah' }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-ink">{member.name}</h4>
              <p className="text-primary font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
