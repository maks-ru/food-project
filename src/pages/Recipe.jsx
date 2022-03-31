import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { goBack } = useHistory();


  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className='btn' onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='card'>
          <div className='card-content'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{width: '100%'}}/>
            <h1>{recipe.strMeal}</h1>
            <h6>Категория: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Место: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>

            <table className='centred'>
              <thead>
                <tr>
                  <th>Ингредиенты</th>
                  <th> Пропорции</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {recipe.strYoutube ? (
              <div className='row'>
                <h5>Видео рецепт</h5>
                <iframe
                  title={id}
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
