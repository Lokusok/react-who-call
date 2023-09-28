export interface IComment {
  id: number;
  username: string;
  date: string;
  time: string;
  telNumber?: string;
  viewsCount?: number;
  commentsCount?: number;
  description: string;
  category: string | null;
}

export interface ITelNumberLine {
  id: number;
  telNumber: string;
  viewsCount: number;
  commentsCount: number;
}

export interface INewReview {
  id: number;
  telNumber: string;
  category: string | null;
  commentsCount: number;
  reviewText: string;
}

export interface IStatisticPoint {
  name: string;
  reviewsCount: number;
}
