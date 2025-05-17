import axios from 'axios';

const ACCESS_KEY = 'tdp8QNJMx6ehdAgjITh35DWpqjtDdm5zaqxoEfaN2Bs';

export interface UnsplashImage {
  id: string;
  alt_description: string | null;

urls: {
  small: string;
  regular: string;
  full: string; 
}

}

export interface UnsplashResponse {
  results: UnsplashImage[];
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    'https://api.unsplash.com/search/photos',
    {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};
