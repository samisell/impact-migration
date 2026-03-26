import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogDetail = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="pt-12 pb-24">
      <article className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          
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
          
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-8 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-muted text-xl leading-relaxed italic border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-8">
          <p>
            Studying abroad is a life-changing decision that opens up a world of opportunities. Whether you're looking to enhance your career prospects, experience a new culture, or gain a world-class education, the journey starts with choosing the right path.
          </p>
          
          <h2 className="text-3xl font-bold text-ink">The Importance of Planning</h2>
          <p>
            The process of moving to a new country for education involves several critical steps, from selecting the right university and course to navigating the complexities of visa applications. Early planning is key to ensuring a smooth transition and avoiding last-minute stress.
          </p>
          
          <blockquote className="bg-neutral p-8 rounded-3xl border-l-8 border-primary text-ink font-medium italic">
            "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
          </blockquote>
          
          <h2 className="text-3xl font-bold text-ink">Key Considerations</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Academic Goals:</strong> Does the university offer the specific program you're interested in?</li>
            <li><strong>Financial Planning:</strong> Have you considered tuition fees, living costs, and available scholarships?</li>
            <li><strong>Location:</strong> Does the country and city align with your lifestyle preferences and career goals?</li>
            <li><strong>Visa Regulations:</strong> What are the post-study work opportunities in your chosen destination?</li>
          </ul>
          
          <p>
            At Impact Migration, we are committed to helping you navigate these choices. Our expert counselors provide personalized guidance to ensure you make the best decision for your future.
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="font-bold text-ink">Share this article:</span>
            <div className="flex gap-4">
              <button className="bg-neutral p-3 rounded-xl text-muted hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></button>
              <button className="bg-neutral p-3 rounded-xl text-muted hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></button>
              <button className="bg-neutral p-3 rounded-xl text-muted hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></button>
              <button className="bg-neutral p-3 rounded-xl text-muted hover:bg-primary hover:text-white transition-all"><Share2 size={18} /></button>
            </div>
          </div>
          
          <Link to="/apply" className="btn-primary">
            Start Your Journey Today
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 mt-32">
        <h3 className="text-3xl font-bold text-ink mb-12">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map((related) => (
            <Link key={related.id} to={`/blog/${related.id}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-xl transition-all h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-ink mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                  <p className="text-muted text-xs">{related.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
