import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealList from '../components/MealList';
import Preloader from '../components/Preloader';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);
  return (
    <>
      <button className='btn' onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
