import React from 'react';
import { motion } from 'motion/react';

const TermsOfService = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Last updated: October 20, 2025
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and services of Impact Migration, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">2. Description of Services</h2>
            <p>
              Impact Migration provides study abroad counseling, admission processing, visa assistance, and related services to students. We act as an intermediary between students and international educational institutions.
            </p>
            <p>
              While we strive to provide accurate information and expert guidance, we do not guarantee admission to any university or the issuance of any visa. The final decision rests solely with the educational institution and the relevant immigration authorities.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">3. User Responsibilities</h2>
            <p>
              As a user of our services, you are responsible for providing accurate and complete information. You must also comply with all deadlines and requirements set by educational institutions and immigration authorities.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>You must provide authentic and verifiable documents.</li>
              <li>You are responsible for paying all fees, including tuition, visa fees, and our service fees.</li>
              <li>You must inform us of any changes to your status or application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">4. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of Impact Migration and is protected by intellectual property laws. You may not use, reproduce, or distribute any part of our website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">5. Limitation of Liability</h2>
            <p>
              Impact Migration shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our services or your inability to use them. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-ink mb-6">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at info@impactmigration.com.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
