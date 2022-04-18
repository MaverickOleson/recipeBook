import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';

export default function Recipes() {
    document.getElementById('root').className = 'recipes centerScreen';
    const [recipes, setRecipes] = useState();
    useEffect(async () => {
        setRecipes((await axios.get('https://myrecipesapi.herokuapp.com/')).data);
        console.log((await axios.get('https://myrecipesapi.herokuapp.com/')).data.cookie.ingredients)
    }, []);
    return (
        <>
            <Book />
            {(recipes.cookie.ingredients) ? recipes.cookie.ingredients : 's'}
        </>
    )
}
