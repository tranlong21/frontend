
export interface AlbumImage {
  id: number;
  url: string;
  thumb: string;
}

export interface Comment {
  id?: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface PagedResponse<T> {
  items: T[];
  nextCursor: string | null;
}
