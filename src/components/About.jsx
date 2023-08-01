import React from 'react'

const About = () => {
  return (
    <div className='p-10'>
      <h1 className='text-4xl'>Recipe Search and Filtering App with React and Edamam API</h1>
      <p className='text-xl py-2'>The Recipe Search and Filtering App is a web application built using React that allows users to search for recipes and filter them based on categories. The app leverages the Edamam API, which provides a vast collection of recipes, ingredients, and nutritional data. Users can easily find recipes that match their preferences, dietary restrictions, and ingredients available.</p>
      <h2 className='text-2xl text-bold'>Key Features</h2>
      <ul className='list-disc list-inside text-xl p-5'>
        <li>Search for recipes by keyword</li>
        <li>Filter recipes by category</li>
        <li>Filter recipes by dietary restrictions</li>
        <li>Filter recipes by ingredients</li>
        <li>View recipe details</li>
        <li>View recipe nutritional information</li>
      </ul>
      <h2 className='text-2xl text-bold'>Technologies Used</h2>
      <ul className='list-disc list-inside text-xl p-5'>
        <li>React</li>
        <li>TailWindCss</li>
        <li>Edamam API</li>
      </ul>
    </div>
  )
}

export default About