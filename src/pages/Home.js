import React from 'react';
import recipesVideo from './recipes.mkv';

export default function Home() {
  document.getElementById('root').className = 'home';
  return (
    <>
      <h1>Welcome to my Dessert Recipe Blog</h1>
      <p>This is a place where I take the best dessert recipes I can find and display them for use.</p>
      <p>Here is how to navigate my recipes, on the recipes page.</p>
      <video controls>
        <source src={recipesVideo} type="video/mp4" />
        Simply click the pages to navigate, and select filters to categorize the given list.
      </video>
    </>
  )
}