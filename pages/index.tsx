import React, { useState } from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma'
import Meal from "../components/Meal"
import Sidebar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'

const IndexStyled = styled.section`
  display: flex;

  .meals {
    display: grid;
    place-content: center;
    gap: 5rem;
    width: 100%;
  }
`

const Index: React.FC = ({ meals, ingredients }) => {
  const [breakfast, setBreakfast] = useState([])

  const handleAddBreakfast = (meal) => {
    setBreakfast([
      ...breakfast,
      {
        id: meal.id,
        title: meal.title,
        calories: meal.calories
      }
    ])
  }

  const handleDeleteBreakfast = (item) => {
    setBreakfast(breakfast.filter(b => b !== item))
  }

  return (
    <IndexStyled>
      <Sidebar meals={meals} ingredients={ingredients} handleAddBreakfast={handleAddBreakfast} />

      <div className="meals">
        <Meal title='Breakfast' items={breakfast} handleDeleteBreakfast={handleDeleteBreakfast} />
        <Meal title='Lunch' />
        <Meal title='Dinner' />
        <Meal title='Snacks/Misc' />
      </div>
    </IndexStyled>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meals = await prisma.meal.findMany()
  const ingredients = await prisma.ingredient.findMany()

  return {
    props: {
      meals,
      ingredients
    }
  }
}

export default Index