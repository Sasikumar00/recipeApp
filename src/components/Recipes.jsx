import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// navigate('/recipes', {state: {data: data}})
const Recipes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        if(location.state!==null){
            console.log(location.state)
            setData(location.state)
        }
        else{
            console.log('No data')
            navigate('/')
        }
    },[location.state, navigate])
    const goToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
      <div className='p-5'>
        <h1 className='text-5xl'>Recipes</h1>
        {data.length!==0 &&
        <div className="recipe-container grid md:grid-cols-3 m-2">
        {data.hits.length>0 && data.hits.map((recipe, index)=>{
            return(
                <div key={index} className='card flex flex-col justify-center m-3 p-5 shadow-lg border border-gray-600'>
                    <div className="card-head flex flex-col items-center">
                    <h1 className='text-3xl'>{recipe.recipe.label}</h1>
                    <img className='w-[80%] mt-3' src={recipe.recipe.image} alt="" />
                    </div>
                    <div className="card-content ml-12 p-3">
                    <p className='text-xl'><strong>Calories:</strong> {recipe.recipe.calories}</p>
                    <p className='text-xl'><strong>Time Required:</strong> {recipe.recipe.totalTime}</p>
                    <a href={recipe.recipe.url} target='_blank' rel="noreferrer" className='text-blue-800'><strong>View Recipe</strong></a>
                    </div>
                </div>
            )})}
        {data.hits.length===0 && 
        <div className="card-container flex items-center justify-center h-screen">
            <h1 className='text-3xl text-red-600'>No Recipes Found</h1>
        </div>}
        </div>}
    <button className='fixed bottom-5 right-5 bg-blue-700 text-white rounded-full py-2 px-3' onClick={goToTop}>^</button>
    </div>
  )
}

export default Recipes