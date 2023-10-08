export interface IComment {
  id: number;
  username: string;
  date: string;
  time: string;
  telNumber?: string;
  description: string;
  type: string | null;
  UserId?: number;
  TelId?: number;
  telCommentsCount?: number;
}

export interface INewComment extends IComment {
  Tel: {
    telNumber: string;
  };
}

export interface IStatisticPoint {
  name: string;
  reviewsCount: number;
}

export interface ITel {
  id: number;
  telNumber: string;
  rating: number;
  viewsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPreviewOfTel {
  id: number;
  telNumber: string;
  viewsCount: number;
  commentsCount: number;
}

export enum UniqueUserFields {
  Email = 'email',
  Username = 'username',
}

export enum StatusesStates {
  Error = 'error',
  Success = 'success',
  Default = 'default',
}

export enum TypesOfStatuses {
  Register = 'register',
  Login = 'login',
}

export enum CallTypesEnum {
  InviteStr = 'Выберите тип',
  Другое = 'Другое',
  Мошенники = 'Мошенники',
  Реклама = 'Реклама',
  Коллекторы = 'Коллекторы',
  Опросы = 'Опросы',
  Хулиганы = 'Хулиганы',
  'Колл-центр' = 'Колл-центр',
  Неадекваты = 'Неадекваты ',
}
