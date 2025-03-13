interface DataType {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

const faq_data: DataType[] = [
  {
    id: 1,
    question: 'Who we are?',
    answer: `Jakarta Asia Property is under PT. Jardine Asia Pasific was established in 2016 to be one of Indonesian professional’s property consultants
            On the basis  of  professionalism  and  fast experiences  in the property industry.`,
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
    answer: 'Giving the best services to the clients',
    showAnswer: false,
  },
];

export default faq_data;
