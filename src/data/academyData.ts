import { Course, FAQItem } from '../types';

export const ACADEMY_INFO = {
  name: 'Sadia Online Quran Academy',
  tagline: 'Learn Quran Online With Ease & Confidence',
  teacher: 'Hafiza Sadia',
  role: 'Quran Teacher',
  phoneDisplay: '03086804050',
  phoneRaw: '03086804050',
  whatsappUrl: 'https://wa.me/923086804050',
  monthlyFee: 'PKR 2,000 / Month',
  audience: 'Children, Girls and Women',
  platform: 'Zoom / WhatsApp',
  heroDescription: 'Online one-to-one Quran classes for children, girls and women with flexible timings and personal attention.',
};

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    arabicTitle: 'نوراني قاعدة',
    description: 'The essential foundation for beginners to learn Arabic letters, correct pronunciation (Makharij), and phonetic joining rules.',
    suitableFor: 'Complete beginners, young kids, and adult sisters starting from scratch.',
    highlights: [
      'Arabic Alphabet recognition & phonetics',
      'Correct articulation points (Makharij)',
      'Letter compound forms & Harakaat (vowels)',
      'Tanween, Sukoon, Tashdeed & Madd rules',
      'Gradual progression to Quranic words'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'nazra-quran',
    title: 'Nazra Quran',
    arabicTitle: 'ناظرہ قرآن',
    description: 'Learn to read the Holy Quran fluently and correctly with proper vocalization, punctuation, and smooth rhythm.',
    suitableFor: 'Students who completed Qaida and wish to recite the complete Quran with accuracy.',
    highlights: [
      'Fluent recitation of Quranic verses',
      'Recognition of Waqf (stopping) signs',
      'Correction of common recitation mistakes',
      'Daily supervised reading & practice',
      'Regular pronunciation checks & correction'
    ],
    icon: 'BookMarked'
  },
  {
    id: 'quran-tajweed',
    title: 'Quran with Tajweed',
    arabicTitle: 'تجويد القرآن',
    description: 'Master the rules of Tajweed to recite the Holy Quran beautifully and accurately as revealed to Prophet Muhammad (PBUH).',
    suitableFor: 'Intermediate to advanced readers seeking perfection in Quranic rules and melody.',
    highlights: [
      'Rules of Noon Saakin & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Rules of Meem Saakin & Qalqalah',
      'Makharij al-Huroof (precise tongue/throat positions)',
      'Heavy & Light letters (Tafkheem & Tarqeeq)',
      'Madd types and syllable elongation'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'hifz-quran',
    title: 'Hifz-e-Quran',
    arabicTitle: 'حفظ القرآن',
    description: 'Structured Quran memorization program with personal one-to-one supervision and a systematic daily revision plan.',
    suitableFor: 'Dedicated children, girls, and women wanting to memorize Surahs or the complete Quran.',
    highlights: [
      'Daily Sabaq (new memorization lesson)',
      'Daily Sabqi (recent memorized portions)',
      'Systematic Manzil (long-term revision)',
      'Retention techniques & strong recall drills',
      'Encouraging and gentle pace'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'basic-islamic-teachings',
    title: 'Basic Islamic Teachings',
    arabicTitle: 'اسلامی تعلیمات',
    description: 'Essential foundational knowledge of Islamic beliefs, practical acts of worship, Salah method, and daily Islamic manners.',
    suitableFor: 'Young students and beginners seeking essential Islamic understanding and values.',
    highlights: [
      'Step-by-step Practical Salah (Namaz) with translation',
      'Six Kalimahs with meanings',
      'Correct method of Wudu (Ablution) and Taharah',
      'Core Islamic pillars and basic beliefs',
      'Daily Islamic manners, etiquettes, and Akhlaaq'
    ],
    icon: 'Compass'
  },
  {
    id: 'basic-duas',
    title: 'Basic Duas',
    arabicTitle: 'مسنون دعائیں',
    description: 'Learn essential daily Masnoon supplications for every routine moment in life, from morning to night.',
    suitableFor: 'Children, girls, and women wanting to enrich their daily routine with Sunnah prayers.',
    highlights: [
      'Duas before and after eating meals',
      'Duas for waking up and going to sleep',
      'Entering and leaving home, Masjid, and washroom',
      'Dua-e-Qunoot and Ayat-ul-Kursi memorization',
      'Morning and evening protection supplications'
    ],
    icon: 'HeartHandshake'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: 'One-to-One Classes',
    description: 'Every session is strictly one teacher with one student for complete undivided focus and customized attention.',
    icon: 'UserCheck'
  },
  {
    id: '2',
    title: 'Flexible Timings',
    description: 'Choose class slots that seamlessly adapt to your school schedule, household routines, or working hours.',
    icon: 'Clock'
  },
  {
    id: '3',
    title: 'Personal Attention',
    description: 'Lesson pace is personalized to each student’s individual grasping speed with zero pressure.',
    icon: 'Heart'
  },
  {
    id: '4',
    title: 'Beginners Welcome',
    description: 'No previous Arabic or Quran background required. We start gently from the very first letter.',
    icon: 'Sparkles'
  },
  {
    id: '5',
    title: 'Online Learning',
    description: 'Join live interactive classes from the safety and convenience of your home via Zoom or WhatsApp.',
    icon: 'Monitor'
  },
  {
    id: '6',
    title: 'Free Trial Class',
    description: 'Experience our teaching style, meet Hafiza Sadia, and assess the class format with zero upfront cost.',
    icon: 'Gift'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Contact Us',
    description: 'Message us on WhatsApp at 03086804050 or click Book Free Trial to share student details and preferred course.',
    icon: 'MessageCircle'
  },
  {
    stepNumber: '02',
    title: 'Choose Your Schedule',
    description: 'Select your preferred class days and convenient daily timing slots that match your home routine.',
    icon: 'Calendar'
  },
  {
    stepNumber: '03',
    title: 'Start Your Quran Classes',
    description: 'Join your live one-to-one interactive session via Zoom or WhatsApp and begin learning with confidence.',
    icon: 'PlayCircle'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can join Sadia Online Quran Academy?',
    answer: 'Sadia Online Quran Academy welcomes children (both young boys and girls), school and college girls, and adult women looking for a dedicated, respectful, and encouraging female Quran tutor.'
  },
  {
    id: 'faq-2',
    question: 'Are beginners welcome?',
    answer: 'Yes, absolutely! Beginners start from the very foundation with Noorani Qaida, learning Arabic letter shapes, correct phonetics, Makharij (pronunciation points), and basic reading rules step-by-step.'
  },
  {
    id: 'faq-3',
    question: 'Who teaches the Quran classes?',
    answer: 'All classes are taught by Hafiza Sadia, an experienced Quran teacher who provides dedicated one-to-one personal attention, gentle encouragement, and customized guidance for every student.'
  },
  {
    id: 'faq-4',
    question: 'How are the online classes conducted?',
    answer: 'Classes are conducted live online one-to-one through Zoom or WhatsApp audio/video calls with interactive digital screensharing of Quranic texts and Noorani Qaida lessons.'
  },
  {
    id: 'faq-5',
    question: 'Can I choose my class timing?',
    answer: 'Yes, we provide flexible scheduling. You can select convenient morning, afternoon, or evening timing slots that easily adapt to your school, work, or family routine.'
  },
  {
    id: 'faq-6',
    question: 'Are classes available for children?',
    answer: 'Yes! We have specialized beginner-friendly courses for kids including Noorani Qaida, Nazra Quran, basic Islamic teachings, Salah method, and daily Masnoon Duas taught in a patient and friendly environment.'
  },
  {
    id: 'faq-7',
    question: 'Are classes available for girls and women?',
    answer: 'Yes, our academy is specially tailored for female students of all ages (young girls, teenagers, and adult women) seeking comfortable, safe, and private one-to-one Islamic learning from home.'
  },
  {
    id: 'faq-8',
    question: 'Is a free trial class available?',
    answer: 'Yes! We offer a 100% free trial class with zero obligation so students and parents can experience the teaching quality, interactive format, and schedule options before monthly enrollment.'
  },
  {
    id: 'faq-9',
    question: 'How can I contact the academy?',
    answer: 'You can directly contact Hafiza Sadia on WhatsApp at 03086804050 (or click any of the WhatsApp buttons on this website) to ask questions, schedule timings, and book your free trial.'
  }
];
