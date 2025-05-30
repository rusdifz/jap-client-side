interface DataType {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

export const faq_data: DataType[] = [
  {
    id: 1,
    question: 'Who we are?',
    answer: `Jakarta Asia Property, a subsidiary of PT Jardine Asia Pacific, was established in 2016 as a professional property consultancy in Indonesia. By leveraging our industry expertise and unwavering commitment to excellence, we provide comprehensive consultancy services through a dedicated and dynamic team, tailored to meet the unique needs of each client. With a broad spectrum of capabilities, we are committed to building a strong reputation for delivering high-quality property consulting solutions.`,
    showAnswer: false,
  },
  {
    id: 2,

    question: 'What’s our goal',
    answer:
      'Jakarta Asia Property demonstrates its dedication through a passionate team of professionals, offering personalized services that cover all aspects of property consultancy. Drawing on our strengths across diverse business areas and service sectors, we strive to consistently deliver value and build long-term trust with our clients.',
    showAnswer: false,
  },
  {
    id: 3,
    question: 'Our vision',
    answer: '',
    showAnswer: false,
  },
];
