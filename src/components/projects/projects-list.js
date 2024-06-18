import quiz from '../../assets/image/thumbnails/quiz.png';
import fitnessBlog from '../../assets/image/thumbnails/fitness-blog.png';
import psychologist from '../../assets/image/thumbnails/psychologist.png';
import wedding from '../../assets/image/thumbnails/wedding.png';

export const projectsList = [
  {
    num: 1,
    imageSrc: quiz,
    name: 'Quiz',
    description: 'Квиз в формате викторины: 1 раунд - 10 вопросов, 2-4 варианта ответов на каждый. Вопросы и ответы (на английском языке) получены через GET-запрос к Open Trivia API JSON.',
    technologies: 'JavaScript | Vite | animejs | API | JSON | JS modules',
    link: 'https://stonetanya.github.io/Quiz/',
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
    imageSrc: wedding,
    name: 'Свадебный сайт',
    description: '',
    technologies: 'HTML | SCSS ',
    link: 'https://stonetanya.github.io/Wedding-Page/',
  },
  {
    num: 4,
    imageSrc: fitnessBlog,
    name: 'Лендинг для фитнес-тренера',
    description: '',
    technologies: 'JavaScript | Webpack | JS modules ',
    link: 'https://margolen.github.io/',
  },
];
