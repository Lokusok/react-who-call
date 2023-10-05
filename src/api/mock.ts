import { IComment, INewReview, IStatisticPoint } from '../types';

export const dataComments: IComment[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

export const newReviews: INewReview[] = [
  {
    id: 1,
    telNumber: '9672163843',
    category: null,
    commentsCount: 3,
    reviewText: 'Воскресный звонок. В трубке - гудки.',
  },

  {
    id: 2,
    telNumber: '3472324018',
    category: 'Реклама',
    commentsCount: 1,
    reviewText: 'Ростелеком робот',
  },

  {
    id: 3,
    telNumber: '9274064037',
    category: 'Мошенники',
    commentsCount: 1,
    reviewText: 'Бросили трубку, тюремные вымогатели херовы.',
  },

  {
    id: 4,
    telNumber: '9250414178',
    category: null,
    commentsCount: 2,
    reviewText: 'Предлагают работу',
  },
];

export const chartData: IStatisticPoint[] = [
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

export const mockReviews: Record<string, IComment[]> = {
  '9587137815': [
    {
      id: 1,
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
      id: 2,
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
  ],
};
