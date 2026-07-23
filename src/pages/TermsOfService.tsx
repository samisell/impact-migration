import React from 'react';
import { motion } from 'motion/react';
import { FileText, AlertTriangle, ShieldCheck, Scale, DollarSign, Building, Clock, Gavel } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-12 pb-24 bg-neutral/20 min-h-screen">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            <span>Binding Service Agreement</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-ink mb-4 leading-tight uppercase tracking-tight">
            IMPACT MIGRATION CONSULTS LIMITED <br />
            <span className="text-primary">– TERMS OF SERVICE –</span>
          </h1>
          <p className="text-muted text-xs md:text-sm font-semibold max-w-2xl mx-auto">
            Suite G301, Ogba Central Mall, Ogba, Lagos, Nigeria | RC: 1514781 | TIN: 2355120526
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-10 text-ink leading-relaxed"
        >
          {/* Preamble / Introduction */}
          <div className="p-6 rounded-2xl bg-neutral/50 border border-gray-200 text-ink text-sm md:text-base leading-relaxed">
            <p className="font-medium">
              This is a contract between you and <strong>Impact Migration Consults Limited (IMC)</strong>. This website and its related services are owned and operated by IMC. By signing up to use an account through <strong>impactmigration.com</strong>, or any other of our approved channels, partners, agents, associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this agreement.
            </p>
          </div>

          {/* General Section */}
          <section className="border-b border-gray-100 pb-8 space-y-4">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
              <span>General Terms</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Impact Migration Consults Limited will forward all applicant(s) documents for processing to its partnering universities and/or some other universities for issuance of conditional/unconditional letter of acceptance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted text-base">
              <li>
                Impact Migration Consults Limited will provide for applicant(s) the education services that includes administrative, counseling, liaising between the applicant(s) and its partnering universities and/or some other universities.
              </li>
            </ul>
          </section>

          {/* Refund Policy */}
          <section className="border-b border-gray-100 pb-8 space-y-6">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              <span>Refund Policy</span>
            </h2>

            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-red-900 uppercase tracking-wider">Non-Refundable Fees</h3>
              <p className="text-sm text-red-900/80 leading-relaxed">
                The service fee, admission processing fee, and visa processing fee are strictly non-refundable. University application fees are only refundable if a refund is received from the respective universities.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-ink">Tuition Fee Refunds</h3>
              <p className="text-muted text-base leading-relaxed">
                In the event of a visa refusal, most partner universities may refund the applicant’s tuition deposit after deducting administrative and transfer charges. However, Impact Migration Consult Limited shall not be held liable for any university’s decision to refuse or delay a refund.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-4 text-muted text-base leading-relaxed">
              <li>
                Courier fee, Visa application fee and other processing cost carried out through other parties are only refundable if we get a refund from these third parties. It is your responsibility to check with us on this specific refund policy not stated on this website. By subscribing to any of our services, you have agreed and accepted all our refund policies and all our other term of service. We can only account for payment made through our approved payment channel. Money transfer and payment charges are also covered by you for all refund.
              </li>
              <li>
                Disputes arising in connection with fake documents from the applicant(s) will result in losing the applicant(s) tuition fee paid to the university.
              </li>
              <li>
                Applicant(s) will comply with the general obligations specified by these terms and conditions and acknowledges that Impact Migration Consults Limited ability to deliver the admission and/or visa services is dependent upon applicant(s) full and timely cooperation with Impact Migration Consults Limited, as well as the accuracy and completeness of any information and data applicants provides in due time.
              </li>
              <li>
                Impact Migration Consults Limited reserves the right to change these terms at any time, in our sole discretion. Any such changes in respect of your use of the services will take effect when posted on the website. If you have supplied us with an email address, we will also notify you by email of changes to these terms.
              </li>
              <li>
                It is your responsibility to read the terms carefully on each occasion you use the services. Your continued use of the services shall signify your acceptance to be bound by the current terms.
              </li>
              <li>
                Failure or delay by IMC in enforcing or partially enforcing any provision of these terms shall not be construed as a waiver of any rights.
              </li>
            </ul>
          </section>

          {/* Processing Time for Refunds */}
          <section className="border-b border-gray-100 pb-8 space-y-3">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <span>Processing Time for Refunds</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Refund timelines are determined solely by the respective universities or embassies. Impact Migration Consult Limited has no control over these timelines. Applicants must exercise patience while awaiting refunds from the relevant institutions.
            </p>
          </section>

          {/* Client Conduct During Refund Processing */}
          <section className="border-b border-gray-100 pb-8 space-y-4">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span>Client Conduct During Refund Processing</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              The client agrees not to engage in any of the following actions while the refund is being processed:
            </p>
            <div className="space-y-3 pl-4">
              <p className="text-sm text-ink font-medium">
                <strong className="text-primary">a. Harassment:</strong> Engaging in any unlawful harassment of the CEO or any member of the company, either within or outside the company’s premises, including intimidation through law enforcement officers or agencies.
              </p>
              <p className="text-sm text-ink font-medium">
                <strong className="text-primary">b. Defamation:</strong> Making false, slanderous, or misleading statements, whether verbal or written, that could damage the reputation of the company or its CEO.
              </p>
              <p className="text-sm text-ink font-medium">
                <strong className="text-primary">c. Libel:</strong> Publishing defamatory content about the company, its CEO, or any of its members that may harm their personal or professional reputation.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-base font-bold text-ink mb-1">Legal Consequences</h3>
              <p className="text-muted text-sm leading-relaxed">
                If a client engages in any of the above misconducts, Impact Migration Consult Limited reserves the right to pursue legal action as necessary.
              </p>
            </div>
          </section>

          {/* Definitions */}
          <section className="border-b border-gray-100 pb-8 space-y-4">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              <span>Definitions</span>
            </h2>
            <div className="space-y-3 text-sm text-muted leading-relaxed pl-2">
              <p>
                <strong>2.1.</strong> All references to the ‘company,’ ‘us,’ ‘our,’ ‘we’ or ‘Impact Migration’ ‘Impact Migration Consults Limited’ ‘IMC’ ‘impactmigration.com’ means Impact Migration Consults Limited, a company registered in Nigeria by Corporate Affairs Commission, Company number: <strong>RC 1514781</strong>; Taxpayer Identification Number: <strong>2355120526</strong>, having its corporate head office at <strong>Suite G301, Ogba Central Mall, Ogba, Lagos, Nigeria</strong>.
              </p>
              <p>
                <strong>2.2.</strong> All references to ‘you,’ ‘your,’ or the ‘applicant(s)’ mean the person or persons, using the website and/or using the services rendered by us through our website or some other of our approved channels.
              </p>
              <p>
                <strong>2.3.</strong> All references to the ‘Website’ shall include reference to all URL’s operated by IMC.
              </p>
              <p>
                <strong>2.4.</strong> ‘Working Day’ means a day other than a public holiday, a Saturday or a Sunday, in Nigeria.
              </p>
              <p>
                <strong>2.5.</strong> ‘Academic year’ means ‘a duration of roughly 12 Months consisting of two Semesters.’
              </p>
              <p>
                <strong>2.6.</strong> ‘Services’ means any feature provided by us via the Website or any local application (mobile desktop or otherwise), including but not limited to admission and visa processing.
              </p>
              <p>
                <strong>2.7.</strong> ‘Communication’ includes but not limited to communication by email, WhatsApp, WeChat, Facebook, Instagram, Telegram, Calls, our office(s), and our Website.
              </p>
            </div>
          </section>

          {/* No Liability for Third Party Services and Content */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
              <Gavel className="w-6 h-6 text-primary" />
              <span>No Liability for Third Party Services and Content</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              <strong>3.1.</strong> In using our Services, you may view content or be referred to utilize services provided by third parties, including links to web pages and services of such parties (“Third Party Content/Service”). We do not control, endorse or adopt any Third-Party Content/Services and will have no responsibility for Third Party Content/Services including, without limitation, material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. In addition, your dealings or correspondence with such third parties are solely between you and the third parties. We are not responsible or liable for any loss or damage of any sort incurred as a result of any such dealings and you understand that your use of Third Party Content/Services, and your interactions with third parties, is at your own risk.
            </p>
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsOfService;
