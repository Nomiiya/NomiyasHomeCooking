import { useState } from 'react'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import SplitScreen from './SplitScreen/SplitScreen.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplitScreen>
        <Nav />
        <Main />
      </SplitScreen>
    </>
  )
}

export default App
