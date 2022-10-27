import React from "react"
import styled from 'styled-components'

const DailyStyles = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
  }
`

const Daily: React.FC = () => {
  return (
    <DailyStyles>
      <h2>Calories Left</h2>
      <p>546</p>

      <h2>Daily Maximum</h2>
      <p>1200</p>
    </DailyStyles>
  )
}

export default Daily