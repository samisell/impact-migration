import { Country, Service, BlogPost } from './types';

export const COUNTRIES: Country[] = [
  {
    id: '1',
    name: 'United Kingdom',
    slug: 'uk',
    image: 'https://picsum.photos/seed/london-university/800/600',
    overview: 'The UK is home to some of the world\'s most prestigious universities and offers a rich cultural experience.',
    benefits: ['World-class education', 'Post-study work visa', 'Short duration courses', 'Multicultural environment'],
    universities: ['Oxford University', 'Cambridge University', 'Imperial College London', 'UCL'],
    tuitionRange: '£10,000 - £30,000 per year',
    visaRequirements: ['CAS from university', 'Proof of funds', 'English proficiency', 'Valid passport'],
    costOfLiving: '£1,000 - £1,500 per month'
  },
  {
    id: '2',
    name: 'Canada',
    slug: 'canada',
    image: 'https://picsum.photos/seed/canada-campus/800/600',
    overview: 'Canada is known for its high quality of life, welcoming atmosphere, and excellent post-graduation work opportunities.',
    benefits: ['Affordable tuition', 'Work while studying', 'Pathways to PR', 'Safe and diverse'],
    universities: ['University of Toronto', 'UBC', 'McGill University', 'University of Waterloo'],
    tuitionRange: 'CAD 15,000 - CAD 35,000 per year',
    visaRequirements: ['Letter of Acceptance', 'Proof of financial support', 'Police clearance', 'Medical exam'],
    costOfLiving: 'CAD 1,200 - CAD 2,000 per month'
  },
  {
    id: '3',
    name: 'USA',
    slug: 'usa',
    image: 'https://picsum.photos/seed/usa-college/800/600',
    overview: 'The USA offers unparalleled academic flexibility and is a global leader in research and innovation.',
    benefits: ['Academic excellence', 'Diverse range of programs', 'OPT opportunities', 'Cutting-edge technology'],
    universities: ['Harvard University', 'Stanford University', 'MIT', 'UC Berkeley'],
    tuitionRange: '$20,000 - $60,000 per year',
    visaRequirements: ['I-20 form', 'SEVIS fee', 'Financial documentation', 'Visa interview'],
    costOfLiving: '$1,500 - $2,500 per month'
  },
  {
    id: '4',
    name: 'Australia',
    slug: 'australia',
    image: 'https://picsum.photos/seed/australia-study/800/600',
    overview: 'Australia provides a high standard of education and a fantastic lifestyle with its beautiful climate and beaches.',
    benefits: ['High quality of life', 'Strong research focus', 'Post-study work rights', 'Vibrant cities'],
    universities: ['University of Melbourne', 'University of Sydney', 'ANU', 'UQ'],
    tuitionRange: 'AUD 20,000 - AUD 45,000 per year',
    visaRequirements: ['COE from provider', 'GTE requirement', 'Financial capacity', 'Health insurance'],
    costOfLiving: 'AUD 1,800 - AUD 2,500 per month'
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
    image: 'https://picsum.photos/seed/study-abroad-guide/800/600',
    date: 'Oct 12, 2025',
    category: 'Guide'
  },
  {
    id: '2',
    title: 'Top 5 Scholarships for Nigerian Students',
    excerpt: 'Explore the best scholarship opportunities available for Nigerian students looking to study abroad.',
    image: 'https://picsum.photos/seed/scholarship-nigeria/800/600',
    date: 'Oct 15, 2025',
    category: 'Scholarships'
  },
  {
    id: '3',
    title: 'Visa Interview Tips: What You Need to Know',
    excerpt: 'Prepare for your visa interview with these expert tips and common questions asked by consular officers.',
    image: 'https://picsum.photos/seed/visa-interview/800/600',
    date: 'Oct 20, 2025',
    category: 'Visa'
  }
];

export const PARTNER_LOGOS = [
  { name: 'Oxford', url: 'https://picsum.photos/seed/oxford-logo/200/100' },
  { name: 'Harvard', url: 'https://picsum.photos/seed/harvard-logo/200/100' },
  { name: 'Toronto', url: 'https://picsum.photos/seed/toronto-logo/200/100' },
  { name: 'Sydney', url: 'https://picsum.photos/seed/sydney-logo/200/100' },
  { name: 'McGill', url: 'https://picsum.photos/seed/mcgill-logo/200/100' },
  { name: 'Stanford', url: 'https://picsum.photos/seed/stanford-logo/200/100' },
  { name: 'MIT', url: 'https://picsum.photos/seed/mit-logo/200/100' },
  { name: 'UBC', url: 'https://picsum.photos/seed/ubc-logo/200/100' },
];
