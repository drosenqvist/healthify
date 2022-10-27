import React, { useRef } from "react"
import styled from 'styled-components'

const ItemsStyles = styled.div`
  ul {
    visibility: hidden;
  }

  .visible {
    visibility: initial;
  }
`

const Items: React.FC = ({ meals, ingredients, handleAddBreakfast }) => {
  const mealDropdown = useRef()
  const ingredientDropdown = useRef()

  return (
    <ItemsStyles>
      <p onClick={() => mealDropdown.current.classList.toggle('visible')}>Meals ↓</p>
      <ul ref={mealDropdown}>
        {meals.map((meal) => (
          <li key={meal.id} onClick={() => handleAddBreakfast(meal)}>{meal.title}</li>
        ))}
      </ul>

      <p onClick={() => ingredientDropdown.current.classList.toggle('visible')}>Ingredients ↓</p>
      <ul ref={ingredientDropdown}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.title}</li>
        ))}
      </ul>
    </ItemsStyles>
  )
}

export default Items