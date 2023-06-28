import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchPics, PER_PAGE } from '../API/api';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleSearch = searchValue => {
    setSearchValue(searchValue);
    setPics([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      loadPics();
    }
  }, [searchValue, page, isMounted]);

  const loadPics = async () => {
    try {
      setIsLoading(true);
      const response = await fetchPics(searchValue, page);
      const newPics = response.hits;
      const totalImgPages = Math.ceil(response.totalHits / PER_PAGE);
      setPics([...pics, ...newPics]);
      setIsLoading(false);
      setTotalPages(totalImgPages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Searchbar handleSearch={handleSearch} />
      {error ? (
        <div className="error">We have error{error.message}</div>
      ) : (
        <>
          {pics.length !== 0 && <ImageGallery pics={pics} />}
          {isLoading && <Loader />}
        </>
      )}
      {pics.length !== 0 && page !== totalPages && (
        <Button handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};
