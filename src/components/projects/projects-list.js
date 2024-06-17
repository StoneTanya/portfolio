import quiz from '../../assets/image/thumbnails/quiz.png';
import fitnessBlog from '../../assets/image/thumbnails/fitness-blog.png';
import psychologist from '../../assets/image/thumbnails/psychologist.png';


export const projectsList = [
  {
    num: 1,
    imageSrc: quiz,
    name: 'Quiz',
    description: 'Квиз в формате викторины: 1 раунд - 10 вопросов, по 4 варианта ответов на каждый. Вопросы и ответы (на английском языке) получены через сервис Open Trivia API JSON.',
    technologies: 'JavaScript | Vite | animejs | API | JSON | JS modules',
    link: '',
  },
  {
    num: 2,
    imageSrc: psychologist,
    name: 'Лендинг для психолога',
    description: '',
    technologies: 'JavaScript | Vite | React | axios | Localization | js-cookie | react-scroll | swiper ',
    link: 'https://yana-pavlyuts.on.fleek.co/',
  },
  {
    num: 3,
    imageSrc: fitnessBlog,
    name: 'Лендинг для фитнес-тренера',
    description: '',
    technologies: 'JavaScript | Webpack | JS modules ',
    link: 'https://margolen.github.io/#test_start',
  },
];
