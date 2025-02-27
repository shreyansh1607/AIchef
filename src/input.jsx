import React from 'react'
import List from './list'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral} from './ai'

export default function Input() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const recipeSection = React.useRef(null)
    const recipeRef = React.useRef(null)

    async function getRecipe() {
      setIsLoading(true)
      try {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        
        setTimeout(() => {
          recipeRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } finally {
        setIsLoading(false)
      }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <div className="input-container">
            <form className="input-wrapper" action={addIngredient}>
                <input
                    type="text"
                    className="input-field"
                    placeholder=" e.g. potato"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="send-button">
                    + Add ingredient
                </button>
            </form>

            {ingredients.length > 0 && 
                <List  
                    ingredients={ingredients} 
                    ref={recipeSection} 
                    getRecipe={getRecipe}
                    isLoading={isLoading}
                />
            }

            {recipe && <ClaudeRecipe ref={recipeRef} recipe={recipe} />}
        </div>
    )
}
