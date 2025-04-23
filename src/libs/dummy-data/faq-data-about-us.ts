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
    answer: `Jakarta Asia Property, part of PT. Jardine Asia Pacific, was established in 2016 as a professional property consultant in Indonesia. Leveraging professionalism and industry experience, we provide comprehensive consultancy services through a dedicated, dynamic team, tailored to meet client needs. With a broad scope of expertise, we aim to build a solid reputation for delivering high-quality property consulting solutions.`,
    showAnswer: false,
  },
  {
    id: 2,

    question: 'What’s our goal',
    answer:
      'Jakarta Asia Property offers commitment and dedication from a dynamic team of professionals and provides personalized services to our valued clients and customers covering all aspects of property consultancies. From it’s strength in the scope of businesses and services, Jakarta Asia Property aims to build up a solid reputation for quality consulting.',
    showAnswer: false,
  },
  {
    id: 3,
    question: 'Our vision',
    answer: '',
    showAnswer: false,
  },
];
