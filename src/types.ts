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
  preferredCountry: string;
  courseOfInterest: string;
  educationLevel: string;
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
