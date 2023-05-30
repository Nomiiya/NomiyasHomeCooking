import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import Recipes from './Recipes/Recipes.tsx'
import Topnav from './Topnav/Topnav.tsx'
import Main from './Main/Main'
import SplitScreen from './SplitScreen/SplitScreen.tsx'

import { myRecipes } from './Lists/RecipeLists.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Topnav />
      <SplitScreen>
        <Recipes recipes={myRecipes}/>
        <Main />
      </SplitScreen>
    </Container>
  )
}

export default App
