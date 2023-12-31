import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
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

  const handleSearch = e => {
    e.preventDefault();
    const searchKeyWord = e.target.elements.search.value;
    if (searchKeyWord !== searchValue) {
      setSearchValue(searchKeyWord);
      setPage(1);
      setPics([]);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted) {
      loadPics();
    } //eslint-disable-next-line
  }, [searchValue, page]);

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
