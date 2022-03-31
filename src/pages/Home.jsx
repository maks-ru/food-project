import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAllCatigoties } from '../api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCatigoties().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};

export default Home;
