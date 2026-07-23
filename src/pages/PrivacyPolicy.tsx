import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, FileText, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-12 pb-24 bg-neutral/20 min-h-screen">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4" />
            <span>Official Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ink mb-4 leading-tight uppercase tracking-tight">
            IMPACT MIGRATION CONSULTS LIMITED <br />
            <span className="text-primary">– PRIVACY POLICY –</span>
          </h1>
          <p className="text-muted text-sm font-semibold">
            Corporate Head Office: Suite G301, Ogba Central Mall, Ogba, Lagos, Nigeria | RC: 1514781
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-10 text-ink leading-relaxed"
        >
          {/* Section 1 */}
          <section className="border-b border-gray-100 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-ink">1. Use and collection of information</h2>
            </div>
            <p className="text-muted text-base leading-relaxed pl-13">
              Impact Migration Consults Limited majors in admission and visa processing. In order to provide these services, we collect personal information including but not limited to name, address, date of birth, passport number, Internet Protocol (IP) address, and a variety of other data points. All information collected through this service is captured and stored on our database.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b border-gray-100 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-ink">2. Information collection and sharing</h2>
            </div>
            <p className="text-muted text-base leading-relaxed pl-13">
              All information collected by Impact Migration Consults Limited in support of our services is transmitted securely. Impact Migration Consults Limited and its Partners/Agents shares the information you provide with no party other than its official partnering universities, embassies, accredited visa centers, Impact Migration Consults Limited subcontractors and vendors. IMC, IMC’s subcontractors, and IMC vendors may use the information you provide for no other purpose than supporting and facilitating your admission and visa processing and any other service for which the information was collected.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-b border-gray-100 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-ink">3. Protection of Information</h2>
            </div>
            <p className="text-muted text-base leading-relaxed pl-13">
              IMC takes all reasonable precautions to secure the data collected through this site and to protect such data from loss, misuse or alteration. IMC maintains reasonable security standards and procedures regarding unauthorized access to electronic information to prevent unauthorized removal or alteration of data.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-ink">4. Notification of Changes</h2>
            </div>
            <p className="text-muted text-base leading-relaxed pl-13">
              IMC’s privacy statement may change from time to time. IMC will post any privacy statement changes to this page. We encourage you to periodically review this statement to be informed of how IMC is protecting your information.
            </p>
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
