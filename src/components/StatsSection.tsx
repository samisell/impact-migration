import React from 'react';
import { motion } from 'motion/react';
import { Building2, BookOpen, Users, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '1000+',
      label: 'School Partnerships',
      description: 'Top-tier institutions across UK, USA, Canada & Europe',
      icon: Building2,
      gradient: 'from-emerald-500/10 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      value: '20,000+',
      label: 'Courses of Choice',
      description: 'Undergraduate, Postgraduate & Diploma programs',
      icon: BookOpen,
      gradient: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-blue-600',
    },
    {
      value: '5000+',
      label: 'Successful Applicants',
      description: 'Students who fulfilled their study abroad dream',
      icon: Users,
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
    },
    {
      value: '100%',
      label: 'Acceptance Rate',
      description: 'Guaranteed guidance for eligible documentation',
      icon: CheckCircle2,
      gradient: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-8 rounded-3xl bg-neutral hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-4xl lg:text-5xl font-black text-ink tracking-tight group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                  <h3 className="text-lg font-bold text-ink leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
