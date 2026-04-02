import React from 'react'
import Topbar from './compoonents/Topbar'
import Article from './compoonents/Article'
import './App.css'

function App() {
  const [title, setTitle] = React.useState('Understanding React Components')
  return (
    <>
      <Topbar />
      <Article title={title} />
    </>
  )
}

export default App