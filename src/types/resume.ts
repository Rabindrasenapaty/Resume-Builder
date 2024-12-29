export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  gender: string;
  photo?: string;
  github?: string;
  linkedin?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface AdditionalInfo {
  languages: string[];
  certifications: string[];
  awards: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  additionalInfo: AdditionalInfo;
  selectedTemplate?: 'template1' | 'template2';
}