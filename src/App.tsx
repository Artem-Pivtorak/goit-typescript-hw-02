import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Modal from 'react-modal';
import { fetchImages } from './api/unsplash';
import type { UnsplashImage } from './api/unsplash';


import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

Modal.setAppElement('#root');

const App = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleSearch = (newQuery: string) => {
    if (newQuery === '') {
      toast.error('Please enter a search query!');
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError('');
  };

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
      } catch (error) {
        setError('Failed to fetch images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const openModal = (image: UnsplashImage) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
        </>
      )}
      {loading && <Loader />}
      {showModal && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
