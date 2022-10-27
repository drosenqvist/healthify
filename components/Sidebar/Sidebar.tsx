import React from "react"
import styled from 'styled-components'
import Items from "./Items"
import Daily from "./Daily"

const SidebarStyles = styled.section`
  width: fit-content;
  height: 100vh;
  padding: 1rem 2rem 0 2rem;
  background: #efefef;

  h1 {
    margin-bottom: 4rem;
  }
`

const Sidebar: React.FC = ({ meals, ingredients, handleAddBreakfast }) => {
  return (
    <SidebarStyles>
      <h1>Healthify</h1>
      <Daily />
      <Items meals={meals} ingredients={ingredients} handleAddBreakfast={handleAddBreakfast} />
    </SidebarStyles>
  )
}

export default Sidebar