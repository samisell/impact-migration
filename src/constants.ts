import { Country, Service, BlogPost } from './types';



export const COUNTRIES: Country[] = [
  {
    id: '1',
    name: 'United Kingdom',
    slug: 'uk',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    overview: 'The UK is home to top-tier universities offering globally recognized degrees, 2-year post-study work rights, and accelerated 1-year master\'s programs.',
    benefits: ['2-year Post-Study Work Visa', '1-year Master’s degree programs', 'World-renowned institutions', 'Vibrant multicultural student life'],
    universities: ['University of Hertfordshire', 'Teesside University', 'Coventry University', 'University of Greenwich'],
    tuitionRange: '£10,000 - £25,000 per year',
    visaRequirements: ['CAS letter from university', 'Proof of funds (Bank Statement)', 'English proficiency / WAEC credit', 'TB test & Valid Passport'],
    costOfLiving: '£900 - £1,400 per month'
  },
  {
    id: '2',
    name: 'Canada',
    slug: 'canada',
    image: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=1200&q=80',
    overview: 'Canada offers world-class education, affordable tuition fees, part-time work privileges, and direct post-graduation permanent residency pathways.',
    benefits: ['Post-Graduation Work Permit (PGWP)', 'Part-time work while studying', 'High quality of living & safety', 'Clear pathways to Permanent Residency'],
    universities: ['University of Toronto', 'York University', 'Conestoga College', 'University of Windsor'],
    tuitionRange: 'CAD 14,000 - CAD 30,000 per year',
    visaRequirements: ['Official Letter of Acceptance', 'Proof of financial support (PAL/GIC)', 'Statement of Purpose (SOP)', 'Medical examination & Biometrics'],
    costOfLiving: 'CAD 1,100 - CAD 1,800 per month'
  },
  {
    id: '3',
    name: 'USA',
    slug: 'usa',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    overview: 'The USA provides unprecedented academic flexibility, generous full/partial scholarships, and 3-year STEM OPT work authorization.',
    benefits: ['Full & Partial Scholarships available', '3-Year STEM OPT extension', 'State-of-the-art research facilities', 'Flexible credit-based system'],
    universities: ['Arizona State University', 'University of North Texas', 'Illinois Institute of Technology', 'Wichita State University'],
    tuitionRange: '$15,000 - $40,000 per year',
    visaRequirements: ['Form I-20', 'SEVIS I-901 fee receipt', 'Financial documentation', 'F-1 Visa embassy interview'],
    costOfLiving: '$1,200 - $2,200 per month'
  },
  {
    id: '4',
    name: 'Australia',
    slug: 'australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    overview: 'Australia combines high academic standards with post-study work rights, excellent student support services, and a vibrant lifestyle.',
    benefits: ['Up to 4 years Post-Study Work Visa', 'Flexible part-time work rights', 'Top-ranked universities globally', 'Safe, welcoming environment'],
    universities: ['University of Melbourne', 'Monash University', 'Deakin University', 'RMIT University'],
    tuitionRange: 'AUD 20,000 - AUD 38,000 per year',
    visaRequirements: ['eCoE (Confirmation of Enrolment)', 'Genuine Student (GS) criteria', 'Proof of financial funds', 'Overseas Student Health Cover (OSHC)'],
    costOfLiving: 'AUD 1,400 - AUD 2,200 per month'
  },
  {
    id: '5',
    name: 'Poland',
    slug: 'poland',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1200&q=80',
    overview: 'Poland offers accessible European degrees taught in English with low tuition, affordable living costs, and easy Schengen travel.',
    benefits: ['Affordable tuition & low cost of living', 'Schengen zone travel access', 'Degrees accepted across Europe', 'Work permission during studies'],
    universities: ['University of Warsaw', 'Vistula University', 'Warsaw University of Technology', 'Wrocław University'],
    tuitionRange: '€2,000 - €5,000 per year',
    visaRequirements: ['University acceptance letter', 'Apostilled educational certificates', 'Proof of funds & accommodation', 'Schengen student visa application'],
    costOfLiving: '€400 - €700 per month'
  },
  {
    id: '6',
    name: 'Malta',
    slug: 'malta',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    overview: 'Malta provides a warm Mediterranean climate, 100% English-speaking environment, affordable costs, and Schengen visa privileges.',
    benefits: ['100% English-speaking EU nation', 'Schengen Area travel privileges', 'Highly affordable tuition rates', 'Work while studying allowed'],
    universities: ['University of Malta', 'MCAST', 'Global College Malta', 'American University of Malta'],
    tuitionRange: '€4,500 - €10,000 per year',
    visaRequirements: ['Official acceptance letter', 'Proof of funds for tuition & stay', 'Health insurance coverage', 'Proof of accommodation'],
    costOfLiving: '€650 - €1,000 per month'
  },
  {
    id: '7',
    name: 'Dubai (UAE)',
    slug: 'dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dubai is a dynamic global hub offering fast student visa processing, world-renowned UK/US branch campuses, and abundant tax-free career opportunities.',
    benefits: ['99% Visa success rate with fast processing', 'No IELTS required for most institutions', 'Branch campuses of top UK/US universities', 'Tax-free job opportunities'],
    universities: ['Heriot-Watt University Dubai', 'Middlesex University Dubai', 'University of Wollongong Dubai', 'Canadian University Dubai'],
    tuitionRange: 'AED 35,000 - AED 70,000 per year',
    visaRequirements: ['University admission letter', 'Valid passport (minimum 6 months validity)', 'Tuition fee deposit receipt', 'Emirates student visa application'],
    costOfLiving: 'AED 3,000 - AED 5,500 per month'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Admission Processing',
    description: 'We help you secure admissions into top universities across the globe with expert guidance on applications.',
    icon: 'GraduationCap'
  },
  {
    id: '2',
    title: 'Visa Assistance',
    description: 'Our team of experts provides comprehensive support for your visa application to ensure a high success rate.',
    icon: 'FileText'
  },
  {
    id: '3',
    title: 'Scholarship Guidance',
    description: 'We identify and help you apply for relevant scholarships to make your study abroad journey more affordable.',
    icon: 'Award'
  },
  {
    id: '4',
    title: 'Accommodation Support',
    description: 'We assist students and families in securing safe, comfortable, and convenient housing near their institution.',
    icon: 'Home'
  },
  {
    id: '5',
    title: 'Travel Support',
    description: 'From flight bookings to pre-departure briefings, we ensure you are fully prepared for your new journey.',
    icon: 'Plane'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Right Study Destination',
    excerpt: 'Finding the perfect country for your studies can be overwhelming. Here is a guide to help you decide.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 12, 2025',
    category: 'Guide'
  },
  {
    id: '2',
    title: 'Top 5 Scholarships for Nigerian Students',
    excerpt: 'Explore the best scholarship opportunities available for Nigerian students looking to study abroad.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 15, 2025',
    category: 'Scholarships'
  },
  {
    id: '3',
    title: 'Visa Interview Tips: What You Need to Know',
    excerpt: 'Prepare for your visa interview with these expert tips and common questions asked by consular officers.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 20, 2025',
    category: 'Visa'
  }
];

export const CONTACT_INFO = {
  address: 'Suite G301, Ogba Central Mall, Ogba, Lagos, Nigeria.',
  email: 'info@impactmigration.com',
  phones: ['+2348149166564', '+2347033182327'],
  whatsapp: 'https://wa.me/2348149166564',
  whatsappNumber: '+2348149166564',
  socials: {
    instagram: 'https://www.instagram.com/impactmigrations?igsh=a3RkYmV6Mm16NHFl',
    facebook: 'https://www.facebook.com/impactmigrations?mibextid=ZbWKwL',
    linkedin: 'https://www.linkedin.com/company/impact-migration-consults',
    tiktok: 'https://www.tiktok.com/@impactmigrations'
  }
};

export const HERO_IMAGE = '/hero-2.png';

export const PARTNER_LOGOS = [
  { name: 'University of Cambridge', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/300px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png' },
  { name: 'Newcastle University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Newcastle_University_logo.png/320px-Newcastle_University_logo.png' },
  { name: 'University of Toronto', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Utoronto_coat_of_arms.svg/320px-Utoronto_coat_of_arms.svg.png' },
  { name: 'University of Alberta', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/University_of_Alberta_logo.svg/320px-University_of_Alberta_logo.svg.png' },
  { name: 'Princeton University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/320px-Princeton_seal.svg.png' },
  { name: 'Boston University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/320px-Boston_University_seal.svg.png' },
  { name: 'Oxford University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/320px-Oxford-University-Circlet.svg.png' },
  { name: 'Imperial College London', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Imperial_College_London_new_logo.svg/320px-Imperial_College_London_new_logo.svg.png' },
  { name: 'McGill University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/McGill_University_CoA.svg/320px-McGill_University_CoA.svg.png' },
  { name: 'Harvard University', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/320px-Harvard_University_logo.svg.png' },
];