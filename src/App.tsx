import React from 'react'
//components
import { NavBar,Content } from './components'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='color-primary'>
      <NavBar/>
      <Content/>
    </div>
  )
}

export default App