import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  FileText, 
  Globe, 
  BookOpen,
  Award,
  Home as HomeIcon
} from 'lucide-react';

const SERVICES_LIST = [
  { title: 'Career Counselling', icon: Compass, desc: 'Professional guidance aligned with global career opportunities' },
  { title: 'Family Relocation Packages', icon: Globe, desc: 'Seamless relocation planning for individuals and families' },
  { title: 'Admission Processing', icon: GraduationCap, desc: 'Fast-track application processing with high acceptance rate' },
  { title: 'International Exams Preparations', icon: BookOpen, desc: 'Expert prep for IELTS, GRE, GMAT, and language tests' },
  { title: 'Visa Guidance', icon: ShieldCheck, desc: 'Step-by-step visa documentation and interview preparation' },
  { title: 'Tailored Personal Statement', icon: FileText, desc: 'Standout SOPs crafted to highlight your unique profile' },
  { title: 'Arrangement of Scholarships', icon: Award, desc: 'Connecting qualified candidates with full & partial scholarships' },
  { title: 'Accommodation Support', icon: HomeIcon, desc: 'Assistance in securing safe, comfortable, and convenient housing abroad' },
];

const CORE_VALUES = [
  { name: 'RESPECT', desc: 'Valuing every individual, culture, and dream' },
  { name: 'TRANSPARENCY', desc: 'Clear, honest communication at every step' },
  { name: 'COLLABORATION', desc: 'Working hand-in-hand with clients and institutions' },
  { name: 'INTEGRITY', desc: 'Upholding highest ethical standards in all dealings' },
  { name: 'COMMITMENT', desc: 'Unwavering dedication to your success' },
  { name: 'SERVICE', desc: 'Excellence in customer care and post-landing support' },
];

const About = () => {
  return (
    <div className="pt-8 pb-24 bg-neutral/30">
      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>About Impact Migration</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-ink mb-6 leading-tight"
          >
            Your Utmost Desire Is <span className="text-primary">Our Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Providing efficient and seamless career and educational support services to students and professionals worldwide.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">WHAT WE DO</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-snug">
                Educational & Travel Consultancy Firm
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                <strong className="text-ink font-semibold">Impact Migration Consults Limited</strong> is a registered Company Under the Nigerian Corporate Affairs Commission (CAC). We are one of the most diverse and fastest growing travel and educational consultancy firm worldwide with an intense zeal to provide efficient and seamless career and educational support services to students and professionals.
              </p>
              
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-ink text-sm">CAC Registered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-ink text-sm">Global Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/diversity-students-graduation-success-celebration-concept.jpg"
                  alt="Impact Migration Consults Team"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/about-img1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <p className="text-xs uppercase font-bold tracking-wider text-emerald-300">Fastest Growing Firm</p>
                  <p className="text-sm font-semibold">Dedicated to empowering students & professionals globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">COMPREHENSIVE SUPPORT</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Our Services</h2>
          <p className="text-muted text-base mt-2">
            Tailored solutions designed to guarantee your success every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-7 rounded-3xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Our Foundation</span>
            <h3 className="text-2xl md:text-3xl font-black text-ink mb-4">MISSION</h3>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              To provide a transformative platform that empowers young individuals to achieve their academic and career aspirations through seamless access to international education and placement opportunities.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Our Aspiration</span>
            <h3 className="text-2xl md:text-3xl font-black text-ink mb-4">VISION</h3>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              To become a globally recognized leader in educational and career consulting-bringing opportunities and solving real-world challenges by nurturing ambitious, excellence-driven youth for global impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">PASSIONATE PROFESSIONALS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6">OUR TEAM</h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 font-medium text-ink/80">
              We are a group of bright, young people who have recorded tremendous success providing top-notch professional services for both individuals and families.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              We are an educational consulting firm that assist student gain admission into universities abroad. We offer a broad portfolio of excellently managed services right from pre-admission to post landing services tailored to the needs of each and every student seeking abroad education.
            </p>
          </div>

          {/* Founder and CEO Spotlight Card */}
          <div className="bg-neutral p-8 md:p-12 rounded-3xl border border-gray-200/60 shadow-md max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-5 relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/15 rounded-3xl transform -rotate-2"></div>
                <img
                  src="/1.png"
                  alt="Samson Ayeni - Founder and CEO"
                  className="w-64 h-64 md:w-full md:h-80 object-cover rounded-2xl shadow-lg relative z-10 border-4 border-white"
                />
                <div className="absolute -bottom-3 -right-3 z-20 bg-primary text-white py-1.5 px-4 rounded-full text-xs font-bold shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Leadership Spotlight</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-ink">SAMSON AYENI</h3>
                <p className="text-primary font-bold text-base mt-1">Founder and CEO</p>
              </div>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                Under Samson Ayeni's visionary leadership, Impact Migration Consults has grown into a premier global educational and career consulting firm. Dedicated to integrity, excellence, and personalized mentorship, Samson has guided countless students and professionals in realizing their international study and relocation aspirations.
              </p>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-semibold text-ink/80">
                <span>Committed to excellence & high visa success rates</span>
                <span className="text-primary font-bold">Impact Migration Consults</span>
              </div>
            </div>
          </div>

          {/* Additional Leadership & Advisory Team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Dr. Michael Adebayo', role: 'Head of Global Admissions', img: '/2.png', desc: 'Specialist in North American and UK university admissions and scholarship placement.' },
              { name: 'Sarah Jenkins', role: 'Senior Visa & Immigration Lead', img: '/3.png', desc: 'Over 8 years of expertise navigating student visa protocols and compliance.' },
              { name: 'David Okafor', role: 'Career Counselling Director', img: '/4.png', desc: 'Passionate about aligning academic pursuits with long-term global career paths.' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary/20 shadow-sm" />
                <h4 className="font-bold text-ink text-base">{member.name}</h4>
                <p className="text-xs font-bold text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">GUIDING PRINCIPLES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">VALUES</h2>
          <p className="text-muted text-base md:text-lg">
            At Impact Migration, we work as a team and therefore have collective values we hold dear.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CORE_VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-ink text-sm tracking-wider mb-1">{val.name}</h3>
              <p className="text-[11px] text-muted leading-tight">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
