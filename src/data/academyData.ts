import { Course, FAQItem, TestimonialItem } from '../types';

export const ACADEMY_INFO = {
  name: 'Sadia Online Quran Academy & Islamic Center',
  shortName: 'Sadia Quran Academy',
  tagline: 'Learn Quran Online With Ease & Confidence',
  internationalTagline: 'Premier 1-on-1 Distance Learning for Kids, Girls & Women Worldwide',
  teacher: 'Hafiza Sadia',
  role: 'Head Quran & Tajweed Instructor',
  credentials: 'Certified Hafiza of the Holy Quran · Sanad in Tajweed & Qira’at',
  phoneDisplay: '03086804058',
  phoneRaw: '03086804058',
  whatsappUrl: 'https://wa.me/923086804058',
  monthlyFee: 'PKR 2,000 / Month',
  internationalFeeNote: 'Highly affordable worldwide equivalent · No admission fee',
  audience: 'Children (Boys & Girls), Teenage Girls, and Adult Women',
  platform: 'Zoom / WhatsApp Live Virtual Classroom',
  heroDescription: 'Online one-to-one Quran classes for children, girls and women with flexible timings and personal attention.',
  academicSession: 'Academic Session 2026 Admissions Open',
};

export const GLOBAL_METRICS = [
  { value: '1:1', label: 'Private Mentoring', detail: 'Zero crowded batches; undivided focus' },
  { value: '100%', label: 'Female Faculty', detail: 'Safe, modest & comfortable for sisters & kids' },
  { value: 'Global', label: 'Timezone Flexibility', detail: 'UK, USA, Gulf, Europe & Pakistan slots' },
  { value: 'Free', label: 'Diagnostic Assessment', detail: 'Comprehensive evaluation before enrollment' },
];

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    arabicTitle: 'نوراني قاعدة',
    category: 'foundation',
    level: 'Level 1: Foundation',
    duration: '2 - 4 Months (Pace Adaptive)',
    description: 'The essential foundation for beginners to learn Arabic letters, correct pronunciation (Makharij), and phonetic joining rules.',
    suitableFor: 'Complete beginners, young kids, and adult sisters starting from scratch.',
    prerequisites: 'None — Designed from the absolute first Arabic letter.',
    highlights: [
      'Arabic Alphabet recognition & precise phonetics',
      'Correct articulation points (Makharij al-Huroof)',
      'Letter compound forms & Harakaat (vowels)',
      'Tanween, Sukoon, Tashdeed & Madd joining rules',
      'Gradual progression to reading Quranic words'
    ],
    learningOutcomes: [
      'Accurate identification and vocalization of all 28 Arabic letters',
      'Flawless reading of joint Arabic words without hesitation',
      'Seamless readiness to transition directly to the Holy Quran'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'nazra-quran',
    title: 'Nazra Quran',
    arabicTitle: 'ناظرہ قرآن',
    category: 'recitation',
    level: 'Level 2: Recitation Fluency',
    duration: '6 - 12 Months (Custom Pace)',
    description: 'Learn to read the Holy Quran fluently and correctly with proper vocalization, punctuation, and smooth rhythm.',
    suitableFor: 'Students who completed Qaida and wish to recite the complete Quran with accuracy.',
    prerequisites: 'Completion of Noorani Qaida or basic letter joining skills.',
    highlights: [
      'Fluent continuous recitation of Quranic verses',
      'Recognition of Waqf (stopping & pausing) symbols',
      'Systematic correction of common vocalization errors',
      'Daily supervised reading & oral feedback',
      'Confidence building and continuous rhythm flow'
    ],
    learningOutcomes: [
      'Confident, fluent reading of any Surah in the Holy Quran',
      'Proper pacing and adherence to Quranic pauses and stops',
      'Self-correction ability during independent recitation'
    ],
    icon: 'BookMarked'
  },
  {
    id: 'quran-tajweed',
    title: 'Quran with Tajweed',
    arabicTitle: 'تجويد القرآن',
    category: 'tajweed',
    level: 'Level 3: Classical Tajweed Mastery',
    duration: '4 - 8 Months',
    description: 'Master the rules of Tajweed to recite the Holy Quran beautifully and accurately as revealed to Prophet Muhammad (PBUH).',
    suitableFor: 'Intermediate to advanced readers seeking perfection in Quranic rules and melody.',
    prerequisites: 'Basic Nazra Quran reading ability.',
    highlights: [
      'Rules of Noon Saakin & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Rules of Meem Saakin & Qalqalah mechanics',
      'Makharij al-Huroof (precise tongue, throat & lip positions)',
      'Heavy & Light letters (Tafkheem & Tarqeeq discipline)',
      'Madd types and syllable elongation counts'
    ],
    learningOutcomes: [
      'Recitation reflecting classical Prophetic Tajweed standards',
      'Theoretical knowledge and practical execution of Tajweed laws',
      'Melodious, reverent, and precise Quranic delivery'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'hifz-quran',
    title: 'Hifz-e-Quran',
    arabicTitle: 'حفظ القرآن',
    category: 'hifz',
    level: 'Specialized: Memorization Track',
    duration: '1 - 3 Years (Flexible Milestones)',
    description: 'Structured Quran memorization program with personal one-to-one supervision and a systematic daily revision plan.',
    suitableFor: 'Dedicated children, girls, and women wanting to memorize Surahs, Juz Amma, or the complete Quran.',
    prerequisites: 'Accurate Nazra reading with Tajweed.',
    highlights: [
      'Daily Sabaq (new memorization lesson target)',
      'Daily Sabqi (recent memorized portions review)',
      'Systematic Manzil (long-term cumulative revision cycle)',
      'Retention memory techniques & mental recall drills',
      'Encouraging, gentle, and burnout-free pacing'
    ],
    learningOutcomes: [
      'Solid, long-term memorization with crystal-clear recall',
      'Strong discipline in daily Quranic revision habits',
      'Preparedness for formal Hifz milestones and Surah retention'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'basic-islamic-teachings',
    title: 'Basic Islamic Teachings',
    arabicTitle: 'اسلامی تعلیمات',
    category: 'islamic-studies',
    level: 'Core Knowledge: Faith & Practice',
    duration: '3 - 6 Months',
    description: 'Essential foundational knowledge of Islamic beliefs, practical acts of worship, Salah method, and daily Islamic manners.',
    suitableFor: 'Young students and beginners seeking essential Islamic understanding and values.',
    prerequisites: 'None — open to all ages.',
    highlights: [
      'Step-by-step Practical Salah (Namaz) with translation',
      'Six Kalimahs with word-by-word meanings',
      'Correct method of Wudu (Ablution) and Taharah purity',
      'Core Islamic pillars and fundamental articles of faith',
      'Daily Islamic manners, etiquettes, and noble Akhlaaq'
    ],
    learningOutcomes: [
      'Confidence in performing daily Salah and Wudu independently',
      'Solid grounding in essential Islamic identity and daily ethics',
      'Knowledge of basic Islamic obligations and daily Sunnahs'
    ],
    icon: 'Compass'
  },
  {
    id: 'basic-duas',
    title: 'Basic Duas',
    arabicTitle: 'مسنون دعائیں',
    category: 'islamic-studies',
    level: 'Core Knowledge: Daily Masnoon Prayers',
    duration: '2 - 3 Months',
    description: 'Learn essential daily Masnoon supplications for every routine moment in life, from morning to night.',
    suitableFor: 'Children, girls, and women wanting to enrich their daily routine with Sunnah prayers.',
    prerequisites: 'None.',
    highlights: [
      'Duas before and after meals and water intake',
      'Duas for waking up, morning remembrance, and sleep',
      'Entering and leaving home, Masjid, and daily routines',
      'Dua-e-Qunoot and Ayat-ul-Kursi memorization',
      'Morning and evening protection supplications (Adhkar)'
    ],
    learningOutcomes: [
      'Daily remembrance integrated seamlessly into life routines',
      'Accurate Arabic pronunciation of essential protective Duas',
      'Deep appreciation of Sunnah supplications'
    ],
    icon: 'HeartHandshake'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    studentOrParent: 'Mrs. Fatima Al-Hashimi',
    location: 'London, United Kingdom',
    category: 'Mother of 7-year-old student',
    course: 'Noorani Qaida & Basic Duas',
    review: 'Finding a reliable, gentle female teacher in the UK timezone was difficult until we found Hafiza Sadia. In just 3 months, my daughter went from knowing zero Arabic to reading joint words fluently. Hafiza Sadia is exceptionally patient and punctual.',
    rating: 5
  },
  {
    id: 't-2',
    studentOrParent: 'Amina Tariq',
    location: 'Houston, Texas, USA',
    category: 'Adult Student (Sister)',
    course: 'Quran with Tajweed',
    review: 'As an adult sister living in the US, I always hesitated to join local weekend classes due to busy work timings. The one-to-one virtual sessions with Hafiza Sadia gave me the private, respectful environment I needed. Her Tajweed instruction is clear and rewarding.',
    rating: 5
  },
  {
    id: 't-3',
    studentOrParent: 'Dr. Zeeshan & Dr. Maryam',
    location: 'Dubai, UAE',
    category: 'Parents of 2 young girls',
    course: 'Nazra Quran & Daily Salah',
    review: 'Both of our daughters look forward to their daily classes. Hafiza Sadia’s method is encouraging rather than stressful. The screen-sharing format on Zoom works flawlessly, and the monthly fee is remarkably modest for this level of dedication.',
    rating: 5
  },
  {
    id: 't-4',
    studentOrParent: 'Saima Khan',
    location: 'Lahore, Pakistan',
    category: 'College Student',
    course: 'Hifz-e-Quran (Selected Surahs)',
    review: 'Hafiza Sadia understands the memorization process deeply. Her daily Sabaq-Sabqi-Manzil discipline helped me memorize Surah Al-Baqarah and Juz Amma with strong retention. Highly recommended for any sister.',
    rating: 5
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
    description: 'Message us on WhatsApp at 03086804058 or click Book Free Trial to share student details and preferred course.',
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
    answer: 'You can directly contact Hafiza Sadia on WhatsApp at 03086804058 (or click any of the WhatsApp buttons on this website) to ask questions, schedule timings, and book your free trial.'
  }
];
