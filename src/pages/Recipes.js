import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';

export default function Recipes() {
    document.getElementById('root').className = 'recipes centerScreen';
    const [recipes, setRecipes] = useState();
    async function getRecipes() {
        const recipePages = [];
        const recipes = (await axios.get('https://myrecipesapi.herokuapp.com/')).data;
        for (const recipe in recipes) {
            recipePages.push(
                <>
                    <h1>{recipe}</h1>
                    <ol>
                        {recipes[recipe].ingredients.map((step, index) => { return <li key={index}>{step}</li> })}
                    </ol>
                </>
            );
        }
        setRecipes(recipePages);
    }
    useEffect(() => {
        getRecipes();
    }, []);
    return (
        <>
            <Book pages={recipes} filters={['yeet', 'whoot']} />
        </>
    )
}
