export interface Course {
  id: string;
  title: string;
  arabicTitle?: string;
  category: 'foundation' | 'recitation' | 'tajweed' | 'hifz' | 'islamic-studies';
  level: string;
  description: string;
  duration?: string;
  suitableFor: string;
  highlights: string[];
  prerequisites?: string;
  learningOutcomes?: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'admissions' | 'academics' | 'classes' | 'tuition';
}

export interface TestimonialItem {
  id: string;
  studentOrParent: string;
  location: string;
  category: string;
  course: string;
  review: string;
  rating: number;
}

export interface TrialBookingData {
  studentName: string;
  studentAge: string;
  gender: 'Child' | 'Female (Girl / Woman)';
  course: string;
  preferredTime: string;
  parentOrStudentPhone: string;
  additionalNotes?: string;
}

