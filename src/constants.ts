import { Country, Service, BlogPost } from './types';



export const COUNTRIES: Country[] = [
  {
    id: '1',
    name: 'United Kingdom',
    slug: 'uk',
    image: '/destination/uk.jpg',
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
    image: '/destination/canada.jpg',
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
    image: '/destination/usa.jpg',
    overview: 'The USA offers unparalleled academic flexibility and is a global leader in research and innovation.',
    benefits: ['Academic excellence', 'Diverse range of programs', 'OPT opportunities', 'Cutting-edge technology'],
    universities: ['Harvard University', 'Stanford University', 'MIT', 'UC Berkeley'],
    tuitionRange: '$20,000 - $60,000 per year',
    visaRequirements: ['I-20 form', 'SEVIS fee', 'Financial documentation', 'Visa interview'],
    costOfLiving: '$1,500 - $2,500 per month'
  },
  {
    id: '4',
    name: 'Malta',
    slug: 'malta',
    image: '/destination/malta.jpg',
    overview: 'Malta offers a unique blend of history, culture, and a high quality of education in a Mediterranean setting.',
    benefits: ['English-speaking environment', 'Affordable living costs', 'Schengen Area access', 'Rich cultural heritage'],
    universities: ['University of Malta', 'MCAST'],
    tuitionRange: '€5,000 - €15,000 per year',
    visaRequirements: ['Letter of Acceptance', 'Proof of funds', 'Health insurance', 'Accommodation proof'],
    costOfLiving: '€700 - €1,000 per month'
  },
  {
    id: '5',
    name: 'Poland',
    slug: 'poland',
    image: '/destination/poland.jpg',
    overview: 'Poland is becoming an increasingly popular study destination, offering quality education at competitive prices.',
    benefits: ['Affordable tuition fees', 'Low cost of living', 'Rich history and culture', 'Central European location'],
    universities: ['University of Warsaw', 'Jagiellonian University', 'Warsaw University of Technology'],
    tuitionRange: '€2,000 - €5,000 per year',
    visaRequirements: ['Letter of Acceptance', 'Proof of funds', 'Health insurance', 'Visa application form'],
    costOfLiving: '€400 - €700 per month'
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

export const CONTACT_INFO = {
  address: 'Suite G301, Ogba Central Mall, Ogba, Lagos, Nigeria.',
  email: 'info@impactmigration.com',
  phones: ['+2348149166564', '+2347033182327']
};

export const HERO_IMAGE = '/hero-2.png';

export const PARTNER_LOGOS = [
  { name: 'University of Cambridge', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.create.ac.uk%2Fwp-content%2Fuploads%2F2018%2F02%2Funiversity-of-cambridge-logo-2.png&f=1&nofb=1&ipt=ad87a53ac944b8fd0d514f9ddc48238b1494b3e08424a97c49d8db45d3ba5a89' },
  { name: 'Newcastle University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2020%2F06%2FNewcastle-University-Logo.jpg&f=1&nofb=1&ipt=bf073448679bc7c4145908620e561cb1ffae9794b1f8d154dfa6808c2b9fcc18' },
  { name: 'Kozminski University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eduopinions.com%2Fwp-content%2Fuploads%2F2019%2F04%2FKozminski-University-logo.png&f=1&nofb=1&ipt=1d1bf81ba62d8de2b59c91f0345ee7ed7d58bb196bfefe36502c52deba743bb4' },
  { name: 'University of Suffolk', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.applytouni.com%2Fmedia%2F803669%2Funiversity-of-suffolk_logo_hr_rgb.png&f=1&nofb=1&ipt=faa8d96fe6a17ff1b42f0a5986d5a5fbf49dbe65538f667c973b2303979ab016' },
  { name: 'University of Hertfordshire', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage-prtl-co.imgix.net%2Fendor%2Forganisations%2F1773%2Flogos%2F1637141722_d220c7128650e3ba.png&f=1&nofb=1&ipt=d0093888ac6be716be42c34cfb32b9283a17085a2bccc482f68bea1e222244b4' },
  { name: 'University of Greenwich', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F855-8558025_university-of-greenwich-logo.png&f=1&nofb=1&ipt=31d61bf36e25110d052aba2d9efa2ec0f89b946e11c5b097f0c77e0ec1dc5dea' },
  { name: 'Swansea University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstudy-eu.s3.amazonaws.com%2Fuploads%2Funiversity%2Fswansea-university-229-logo.png&f=1&nofb=1&ipt=9395cd52d3526b67465490a9456c1092b4fbde24aff3d00a1c25b50e8b3895ff' },
  { name: 'De Montfort University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdarkroom.leicestertigers.com%2F1500%2F171cd195a6f01c33296058bb3e6529c9%3A52740840d4f8a26033b81e8c88c26ee8%2Fdemontfort.jpg&f=1&nofb=1&ipt=c6ca1bf0e2e98d5af7a1403f3f728c7459ef278e410e6ed2877a66d0874d8d7f' },
  { name: 'York St John University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yorksj.ac.uk%2Fmedia%2Fcontent-assets%2Fsafe-images%2Fbrand-guidelines%2Fdownloads%2FYSJ-Logo---Blk-text---transparent.png&f=1&nofb=1&ipt=cb80bca8616738982a8af31fd746b15a112c6a182aa98c8849f939272df7eeb5' },
  { name: 'Cardiff Metropolitan University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficbt.lk%2Fwp-content%2Fuploads%2F2018%2F07%2FUni-Logo-01-3.png&f=1&nofb=1&ipt=911efc0ca7eaa823bb583eb96ff02a44374dd107d62978f5ba2e9e580c77111a' },
  { name: 'University of Toronto', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcanada-culture.org%2Fwp-content%2Fuploads%2F2020%2F05%2Flogo-University-of-Toronto.png&f=1&nofb=1&ipt=099ec160d0df7a39cc221910652f13fbeb1f7520bc909acedcd9d763bc65c471' },
  { name: 'University of Alberta', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ualberta.ca%2Fmedia-library%2Fualberta%2Fhomepage%2Funiversity-of-alberta-logo.jpg&f=1&nofb=1&ipt=214e1b689ce9747ce625a8a10db303b9ebf97bb138745a3fc9680ba1834e8007' },
  { name: 'University of Manitoba', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.umanitoba.ca%2Fwp-content%2Fuploads%2F2019%2F06%2FCropped-logo-1.jpg&f=1&nofb=1&ipt=4cc076ca6c732f0fa1ff1c02740aa88f234a3555acb75543182e17b34cdfdc8a' },
  { name: 'University Canada West', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languagescanada.ca%2Fweb%2Fdefault%2Ffiles%2Fpublic%2Fpublic%2FUCW_Logo_RGB.jpg&f=1&nofb=1&ipt=6561a5ef347722bf4e145462d38dee0fe9afd0bec33f0cd3b23eee1156430e20' },
  { name: 'Brock University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcou.ca%2Fwp-content%2Fuploads%2F2021%2F10%2FB_Logo_H-RGBRedBlackonLight72_130821.png&f=1&nofb=1&ipt=edf8f7ec6b3b34fb83ee5ab4c3fdcbe759a5360bf620caba77e5b8058fca974d' },
  { name: 'York University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.globetoday.net%2Fmedia%2Fk2%2Fitems%2Fcache%2F79e08f32fa8a036f84441baab7b7a7ff_XL.jpg&f=1&nofb=1&ipt=f47eb22a46a46f56ba7ac71bd66827506b65c4b59ff3d41d1da8cf9a0a3aacd9' },
  { name: 'Washington State University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FWashington-State-University-Logo.png&f=1&nofb=1&ipt=62907e027fda7a0c3b311e12a3662206b01a9eb9cf25fb0eee3199d7aa73b215' },
  { name: 'Princeton University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FPrinceton-University-Logo.png&f=1&nofb=1&ipt=3ae5bb83301189b42586db655dfeb99426b1df72611a0a4215e97f4d75dbd9a8' },
  { name: 'Boston University', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2022%2F05%2FBoston-University-Logo-history.png&f=1&nofb=1&ipt=26b55c86cbfa5ea4f736633396c20fa06ce89ee195d5c2721881bacee5564d84' },
  { name: 'University of Szczecin', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.studyinpoland.pl%2Funiversities%2Flogo%2Fthe-university-of-szczecin.jpg&f=1&nofb=1&ipt=1e5960eadab1fdb7443d10170c9bb44cd624bc5958f61ec0a626c113beab99d1' },
  { name: 'University of Wroclaw', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstudy.gov.pl%2Fsites%2Fdefault%2Ffiles%2Flogo_ucz_wiz%2F77%2Flogo_uwr.jpg&f=1&nofb=1&ipt=ed0c9ac93980e686d2d58c21ab8ec1a84ffb0160f3eb177282a5f59e3115b3ef' },
  { name: 'University of Gdansk', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.studyinpoland.pl%2Funiversities%2Flogo%2Funiversity-of-gdansk.jpg&f=1&nofb=1&ipt=d0988567747b9a2f394781c85d6834bdd2a1fac6a702a18e15a54230188995ed' },
  { name: 'University of Warmia and Mazury', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.studyinpoland.pl%2Funiversities%2Flogo%2Fthe-university-of-warmia-and-mazury-in-olsztyn.jpg&f=1&nofb=1&ipt=3ae650d9aec7fed144d8d6583ad887a433bf4654a1402b4d6c8bc55de8f54680' },
  { name: 'Jagiellonian University', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpolsoc.soc.srcf.net%2Fwp-content%2Fuploads%2F2021%2F01%2Fimageonline-co-transparentimage-2.png&f=1&nofb=1&ipt=0e9616fe6150e594c5aa85ad0be575f2f7dd26052e2b7c23e097ffe80f7b9993' },
  { name: 'Medical University of Warsaw', url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.studyinpoland.pl%2Funiversities%2Flogo%2Fmedical-university-of-warsaw.jpg&f=1&nofb=1&ipt=b0b4c9f4cc4a06802f09aab8f9005fb4aed2815c312e2d1c9fe0912c52146af1' },
];