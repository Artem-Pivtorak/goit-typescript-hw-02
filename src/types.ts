// src/types.ts
export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    full: string;
  };
}