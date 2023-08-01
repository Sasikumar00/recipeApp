import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate();
  const [diets, setDiets] = useState([]);
  const [health, setHealth] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [meal, setMeal] = useState([]);
  const [dishType, setDishType] = useState([]);
  const setDietsArray=e=>{
    if(e.target.checked){
      setDiets([...diets, e.target.value])
    }
    else if(diets.includes(e.target.value)){
      setDiets(diets.filter(diet=>diet!==e.target.value))
    }
  }
  const setHealthArray=e=>{
    if(e.target.checked){
      setHealth([...health, e.target.value])
    }
    else if(health.includes(e.target.value)){
      setHealth(health.filter(health=>health!==e.target.value))
    }
  }
  const setCuisineArray=e=>{
    if(e.target.checked){
      setCuisine([...cuisine, e.target.value])
    }
    else if(cuisine.includes(e.target.value)){
      setCuisine(cuisine.filter(cuisine=>cuisine!==e.target.value))
    }
  }
  const setMealArray=e=>{
    if(e.target.checked){
      setMeal([...meal, e.target.value])
    }
    else if(meal.includes(e.target.value)){
      setMeal(meal.filter(meal=>meal!==e.target.value))
    }
  }
  const setDishTypeArray=e=>{
    if(e.target.checked){
      setDishType([...dishType, e.target.value])
    }
    else if(dishType.includes(e.target.value)){
      setDishType(dishType.filter(dishType=>dishType!==e.target.value))
    }
  }
  const setRequestUrl=async(e)=>{
    e.preventDefault();
    const api_id = process.env.REACT_APP_API_ID
    const api_key = process.env.REACT_APP_API_KEY
    let reqURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${api_id}&app_key=${api_key}`
    diets.forEach(diet=>{
      reqURL+=`&diet=${diet}`
    })
    health.forEach(health=>{
      reqURL+=`&health=${health}`
    })
    cuisine.forEach(cuisine=>{
      reqURL+=`&cuisineType=${cuisine}`
    })
    meal.forEach(meal=>{
      reqURL+=`&mealType=${meal}`
    })
    dishType.forEach(dishType=>{
      reqURL+=`&dishType=${dishType.replaceAll(' ', '%20')}`
    })
    console.log(reqURL);
    getRecipes(reqURL);
}
const getRecipes=async(url)=>{
  const res = await fetch(url);
  const data = await res.json();
  navigate("/recipes", {state:data});
}
  return (
    <div className='py-5'>
      <h1 className='text-5xl p-5'>Categories</h1>
      <form onSubmit={setRequestUrl}>
        <div className="diets border border-black p-5 m-5">
          <h3 className='text-3xl'>Diets</h3>
          <div className='grid md:grid-cols-2 xl:grid-cols-4 text-2xl'>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="balanced" id="balanced" value='balanced' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="balanced">Balanced</label>
          </div>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="high-fiber" id="high-fiber" value='high-fiber' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="high-fiber">High fiber</label>
          </div>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="high-protein" id="high-protein" value='high-protein' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="high-protein">High protein</label>
          </div>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="low-carb" id="low-carb" value='low-carb' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-carb">Low carb</label>
          </div>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="low-fat" id="low-fat" value='low-fat' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-fat">Low fat</label>
          </div>
          <div className="diet-option">
            <input className='mx-5' type="checkbox" name="low-sodium" id="low-sodium" value='low-sodium' onChange={setDietsArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-sodium">Low sodium</label>
          </div>
          </div>
        </div>
        <div className="health border border-black p-5 m-5">
          <h1 className='text-3xl'>Health</h1>
          <div className='grid md:grid-cols-2 xl:grid-cols-4 text-2xl'>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="alcohol-cocktail" id="alcohol-cocktail" value="alcohol-cocktail" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="alcohol-cocktail">Alcohol cocktail</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="alcohol-free" id="alcohol-free" value="alcohol-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="alcohol-free">Alcohol free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="celery-free" id="celery-free" value="celery-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="celery-free">Celery free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="crustacean-free" id="crustacean-free" value="crustacean-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="crustacean-free">Crustacean free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="dairy-free" id="dairy-free" value="dairy-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="dairy-free">Dairy free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="DASH" id="DASH" value="DASH" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="DASH">Dash</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="egg-free" id="egg-free" value="egg-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="egg-free">Egg free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="fish-free" id="fish-free" value="fish-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="fish-free">Fish free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="fodmap-free" id="fodmap-free" value="fodmap-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="fodmap-free">Fodmap free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="gluten-free" id="gluten-free" value="gluten-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="gluten-free">Gluten free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="immuno-supportive" id="immuno-supportive" value="immuno-supportive" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="immuno-supportive">Immuno supportive</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="keto-friendly" id="keto-friendly" value="keto-friendly" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="keto-friendly">Keto friendly</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="kidney-friendly" id="kidney-friendly" value="kidney-friendly" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="kidney-friendly">Kidney friendly</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="kosher" id="kosher" value="kosher" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="kosher">Kosher</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="low-fat-abs" id="low-fat-abs" value="low-fat-abs" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-fat-abs">Low fat abs</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="low-potassium" id="low-potassium" value="low-potassium" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-potassium">Low potassium</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="low-sugar" id="low-sugar" value="low-sugar" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="low-sugar">Low sugar</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="lupine-free" id="lupine-free" value="lupine-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="lupine-free">Lupine free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="Mediterranean" id="Mediterranean" value="Mediterranean" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Mediterranean">Mediterranean</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="mollusk-free" id="mollusk-free" value="mollusk-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="mollusk-free">Mollusk free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="mustard-free" id="mustard-free" value="mustard-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="mustard-free">Mustard free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="no-oil-added" id="no-oil-added" value="no-oil-added" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="no-oil-added">No oil added</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="paleo" id="paleo" value="paleo" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="paleo">Paleo</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="peanut-free" id="peanut-free" value="peanut-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="peanut-free">Peanut free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="pescatarian" id="pescatarian" value="pescatarian" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="pescatarian">Pescatarian</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="pork-free" id="pork-free" value="pork-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="pork-free">Pork free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="red-meat-free" id="red-meat-free" value="red-meat-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="red-meat-free">Red meat free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="sesame-free" id="sesame-free" value="sesame-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="sesame-free">Sesame free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="shellfish-free" id="shellfish-free" value="shellfish-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="shellfish-free">Shellfish free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="soy-free" id="soy-free" value="soy-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="soy-free">Soy free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="sugar-conscious" id="sugar-conscious" value="sugar-conscious" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="sugar-conscious">Sugar conscious</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="sulfite-free" id="sulfite-free" value="sulfite-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="sulfite-free">Sulfite free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="tree-nut-free" id="tree-nut-free" value="tree-nut-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="tree-nut-free">Tree nut free</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="vegan" id="vegan" value="vegan" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="vegan">Vegan</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="vegetarian">Vegetarian</label>
            </div>
            <div className="health-option">
              <input className='mx-5' type="checkbox" name="wheat-free" id="wheat-free" value="wheat-free" onChange={setHealthArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="wheat-free">Wheat free</label>
            </div>
            </div>
        </div>
        <div className="cuisineType border border-black p-5 m-5">
          <h1 className='text-3xl'>Cuisine Type</h1>
          <div className='grid md:grid-cols-2 xl:grid-cols-4 text-2xl'>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="American" id="American" value="American" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="American">American</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Asian" id="Asian" value="Asian" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Asian">Asian</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="British" id="British" value="British" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="British">British</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Caribbean" id="Caribbean" value="Caribbean" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Caribbean">Caribbean</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Central Europe" id="Central Europe" value="Central Europe" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Central Europe">Central europe</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Chinese" id="Chinese" value="Chinese" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Chinese">Chinese</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Eastern Europe" id="Eastern Europe" value="Eastern Europe" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Eastern Europe">Eastern europe</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="French" id="French" value="French" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="French">French</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Indian" id="Indian" value="Indian" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Indian">Indian</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Italian" id="Italian" value="Italian" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Italian">Italian</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Japanese" id="Japanese" value="Japanese" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Japanese">Japanese</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Kosher" id="Kosher" value="Kosher" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Kosher">Kosher</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Mediterranean" id="Mediterranean" value="Mediterranean" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Mediterranean">Mediterranean</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Mexican" id="Mexican" value="Mexican" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Mexican">Mexican</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Middle Eastern" id="Middle Eastern" value="Middle Eastern" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Middle Eastern">Middle eastern</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Nordic" id="Nordic" value="Nordic" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Nordic">Nordic</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="South American" id="South American" value="South American" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="South American">South american</label>
              </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="South East Asian" id="South East Asian" value="South East Asian" onChange={setCuisineArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="South East Asian">South east asian</label>
              </div>
            </div>
        </div>
        <div className="mealType border border-black p-5 m-5">
          <h1 className='text-3xl'>Meal Type</h1>
          <div className='grid md:grid-cols-2 xl:grid-cols-4 text-2xl'>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Breakfast" id="Breakfast" value="Breakfast" onChange={setMealArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Breakfast">Breakfast</label>
            </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Dinner" id="Dinner" value="Dinner" onChange={setMealArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Dinner">Dinner</label>
            </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Lunch" id="Lunch" value="Lunch" onChange={setMealArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Lunch">Lunch</label>
            </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Snack" id="Snack" value="Snack" onChange={setMealArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Snack">Snack</label>
            </div>
            <div className="cuisineType-option">
              <input className='mx-5' type="checkbox" name="Teatime" id="Teatime" value="Teatime" onChange={setMealArray}/>
              <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Teatime">Teatime</label>
            </div>
          </div>
        </div>
        <div className="dishType border border-black p-5 m-5">
          <h1 className='text-3xl'>Diet Type</h1>
          <div className='grid md:grid-cols-2 xl:grid-cols-4 text-2xl'>
          <div className="dishType-option">
            <input className='mx-5' type="checkbox" name="Biscuits and cookies" id="Biscuits and cookies" value="Biscuits and cookies" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Biscuits and cookies">Biscuits and cookies</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Bread" id="Bread" value="Bread" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Bread">Bread</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Cereals" id="Cereals" value="Cereals" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Cereals">Cereals</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Condiments and sauces" id="Condiments and sauces" value="Condiments and sauces" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Condiments and sauces">Condiments and sauces</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Desserts" id="Desserts" value="Desserts" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Desserts">Desserts</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Drinks" id="Drinks" value="Drinks" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Drinks">Drinks</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Maincourse" id="Maincourse" value="Maincourse" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Maincourse">Maincourse</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Pancake" id="Pancake" value="Pancake" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Pancake">Pancake</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Preps" id="Preps" value="Preps" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Preps">Preps</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Preserve" id="Preserve" value="Preserve" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Preserve">Preserve</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Salad" id="Salad" value="Salad" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Salad">Salad</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Sandwiches" id="Sandwiches" value="Sandwiches" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Sandwiches">Sandwiches</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Side dish" id="Side dish" value="Side dish" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Side dish">Side dish</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Soup" id="Soup" value="Soup" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Soup">Soup</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Starter" id="Starter" value="Starter" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Starter">Starter</label>
          </div>
          <div className="cuisineType-option">
            <input className='mx-5' type="checkbox" name="Sweets" id="Sweets" value="Sweets" onChange={setDishTypeArray}/>
            <label onClick={e=>{e.target.classList.toggle('text-blue-700')}} className='hover:text-blue-700' htmlFor="Sweets">Sweets</label>
          </div>
        </div>
        </div>
        <button type="submit" className='bg-blue-500 px-4 py-2 text-white text-2xl rounded-md mx-5'>Search</button>
      </form>
    </div>
  )
}

export default Categories