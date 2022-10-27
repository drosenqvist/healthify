import React from "react";
import styled from 'styled-components'

const MealCard = styled.div`
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 1rem;

  .items {
    display: grid;
    gap: 0.3rem;
  }
`

const Meal: React.FC = ({ title, items, handleDeleteBreakfast }) => {
  let cals = 0

  items?.forEach(item => {
    cals += item.calories
  })

  return (
    <MealCard>
      <div className="title">
        <h2>{title}</h2>
        <p>Total calories {cals}</p>
      </div>

      {items?.map((item) => (
        <div key={item.id} className='items'>
          <p>Quantity {}</p>
          <p>{item.title}</p>
          <p>Calories {item.calories}</p>
          <p onClick={() => handleDeleteBreakfast(item)}>x</p>
        </div>
      ))}
    </MealCard>
  );
};

export default Meal