import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Last updated: October 20, 2025
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">Introduction</h2>
            <p>
              At Impact Migration, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you fill out forms on our website, such as your name, email address, phone number, and academic background. We also collect information about your interactions with our website through cookies and similar technologies.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Personal Information:</strong> Name, email, phone number, and address.</li>
              <li><strong>Academic Information:</strong> Education level, course of interest, and preferred study destination.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services, communicate with you about your application, and send you relevant information about study abroad opportunities.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>To process your admission and visa applications.</li>
              <li>To provide personalized counseling and support.</li>
              <li>To send you newsletters and marketing communications (you can opt-out at any time).</li>
              <li>To improve our website and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request that we restrict its use. To exercise these rights, please contact us at info@impactmigration.com.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
