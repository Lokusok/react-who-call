export interface IComment {
  id?: number;
  username: string;
  date: string;
  time: string;
  telNumber: string;
  viewsCount: number;
  commentsCount: number;
  description: string;
  category: string | null;
}

export interface ITelNumberLine {
  id?: number;
  telNumber: string;
  viewsCount: number;
  commentsCount: number;
}
