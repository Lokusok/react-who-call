import { IComment, ITelNumberLine, INewReview } from '../types';

export const dataComments: IComment[] = [
  {
    username: 'Анна',
    date: '23.09.2023',
    time: '17:47',
    telNumber: '3852631066',
    viewsCount: 4,
    commentsCount: 1,
    description:
      'Не знаю позвонили и попросили паспортные данные представились сотрудниками компании Теле2,якобы каждый год надо подтверждать данные,м месяца три назад подтверждали в офисе теле 2.послала на хутур бабочек ловить.',
    category: 'Опросы',
  },
  {
    username: 'Елена',
    date: '23.09.2023',
    time: '17:42',
    telNumber: '9031305821',
    viewsCount: 129,
    commentsCount: 3,
    description: 'Воры мошенники бандиты......',
    category: null,
  },
  {
    username: 'Лина',
    date: '23.09.2023',
    time: '17:38',
    telNumber: '9859975727',
    viewsCount: 207,
    commentsCount: 2,
    description: 'Положительный звонок, сервисное обслуживание',
    category: null,
  },
  {
    username: 'Анна',
    date: '23.09.2023',
    time: '17:47',
    telNumber: '3852631066',
    viewsCount: 4,
    commentsCount: 1,
    description:
      'Не знаю позвонили и попросили паспортные данные представились сотрудниками компании Теле2,якобы каждый год надо подтверждать данные,м месяца три назад подтверждали в офисе теле 2.послала на хутур бабочек ловить.',
    category: 'Опросы',
  },
  {
    username: 'Елена',
    date: '23.09.2023',
    time: '17:42',
    telNumber: '9031305821',
    viewsCount: 129,
    commentsCount: 3,
    description: 'Воры мошенники бандиты......',
    category: null,
  },
  {
    username: 'Лина',
    date: '23.09.2023',
    time: '17:38',
    telNumber: '9859975727',
    viewsCount: 207,
    commentsCount: 2,
    description: 'Положительный звонок, сервисное обслуживание',
    category: null,
  },
  {
    username: 'Анна',
    date: '23.09.2023',
    time: '17:47',
    telNumber: '3852631066',
    viewsCount: 4,
    commentsCount: 1,
    description:
      'Не знаю позвонили и попросили паспортные данные представились сотрудниками компании Теле2,якобы каждый год надо подтверждать данные,м месяца три назад подтверждали в офисе теле 2.послала на хутур бабочек ловить.',
    category: 'Опросы',
  },
  {
    username: 'Елена',
    date: '23.09.2023',
    time: '17:42',
    telNumber: '9031305821',
    viewsCount: 129,
    commentsCount: 3,
    description: 'Воры мошенники бандиты......',
    category: null,
  },
  {
    username: 'Лина',
    date: '23.09.2023',
    time: '17:38',
    telNumber: '9859975727',
    viewsCount: 207,
    commentsCount: 2,
    description: 'Положительный звонок, сервисное обслуживание',
    category: null,
  },
  {
    username: 'Лина',
    date: '23.09.2023',
    time: '17:38',
    telNumber: '9859975727',
    viewsCount: 207,
    commentsCount: 2,
    description: 'Положительный звонок, сервисное обслуживание',
    category: null,
  },
];

export const lastCheckedNumbers: ITelNumberLine[] = [
  {
    telNumber: '9587137815',
    viewsCount: 22,
    commentsCount: 10,
  },
  {
    telNumber: '9956623224',
    viewsCount: 2,
    commentsCount: 3,
  },
  {
    telNumber: '9209466521',
    viewsCount: 5,
    commentsCount: 1,
  },
];

export const newReviews: INewReview[] = [
  {
    telNumber: '+79672163843',
    category: null,
    commentsCount: 3,
    reviewText: 'Воскресный звонок. В трубке - гудки.',
  },

  {
    telNumber: '+73472324018',
    category: 'Реклама',
    commentsCount: 1,
    reviewText: 'Ростелеком робот',
  },

  {
    telNumber: '+79274064037',
    category: 'Мошенники',
    commentsCount: 1,
    reviewText: 'Бросили трубку, тюремные вымогатели херовы.',
  },

  {
    telNumber: '+79250414178',
    category: null,
    commentsCount: 2,
    reviewText: 'Предлагают работу',
  },
];

export const chartData = [
  {
    name: 'Январь',
    reviewsCount: 2,
  },
  {
    name: 'Февраль',
    reviewsCount: 5,
  },
  {
    name: 'Март',
    reviewsCount: 1,
  },
  {
    name: 'Апрель',
    reviewsCount: 4,
  },
  {
    name: 'Май',
    reviewsCount: 7,
  },
  {
    name: 'Июнь',
    reviewsCount: 3,
  },
  {
    name: 'Август',
    reviewsCount: 10,
  },
  {
    name: 'Сентябрь',
    reviewsCount: 2,
  },
  {
    name: 'Октябрь',
    reviewsCount: 1,
  },
  {
    name: 'Ноябрь',
    reviewsCount: 5,
  },
  {
    name: 'Декабрь',
    reviewsCount: 6,
  },
];
