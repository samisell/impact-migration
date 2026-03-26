import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight"
          >
            Blog & <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Stay updated with the latest news, tips, and guides on studying abroad.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-6 text-muted text-xs font-bold uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-primary" />
                      {post.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ink mb-6 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Link to={`/blog/${post.id}`} className="text-ink font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Read More <ArrowRight size={18} className="text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mt-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 text-lg mb-12">
              Get the latest study abroad tips and guides delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white/10 border-2 border-white/20 rounded-2xl px-8 py-4 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none transition-all"
              />
              <button className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
