import React from 'react';
import Book from '../components/Book';

export default function Recipes() {
    document.getElementById('root').className = 'recipes centerScreen';
    return (
        <Book />
    )
}
