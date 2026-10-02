export interface Course {
  id: string;
  title: string;
  arabicTitle?: string;
  description: string;
  duration?: string;
  suitableFor: string;
  highlights: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
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
