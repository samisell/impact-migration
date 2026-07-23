export interface Country {
  id: string;
  name: string;
  slug: string;
  image: string;
  overview: string;
  benefits: string[];
  universities: string[];
  tuitionRange: string;
  visaRequirements: string[];
  costOfLiving: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Lead {
  $id?: string;
  fullName: string;
  email: string;
  phone: string;
  courseType?: string;
  courseOfInterest: string;
  ieltsScore?: string;
  preferredCountry?: string;
  educationLevel?: string;
  message: string;
  createdAt?: string;
}

export interface PartnerLead {
  $id?: string;
  type: string;
  corporateName: string;
  corporateAddress: string;
  corporateEmail: string;
  corporatePhone: string;
  yearOfRegistration: string;
  numberOfEmployees: string;
  contactPersonName: string;
  contactPersonPosition: string;
  contactPersonPhone: string;
  contactPersonWhatsapp: string;
  contactPersonEmail: string;
  createdAt?: string;
}

export interface RegisterUser {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  password?: string;
}

export interface AppointmentLead {
  $id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  startDate: string;
  counsellingMode: string;
  fundingSource: string;
  studyLevel: string;
  agreedTerms: boolean;
  allowContact: boolean;
  receiveUpdates: boolean;
  createdAt?: string;
}

export interface ContactMessage {
  $id?: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}


export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}
