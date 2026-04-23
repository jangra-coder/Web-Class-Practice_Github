import React from 'react'
import Topbar from './components/Topbar.jsx'
import Article from './components/Article.jsx'
import './App.css'
import Homepage from './components/Homepage.jsx'

function App() {
  const [title, setTitle] = React.useState('Understanding React Components')
  return (
    <>
      <Homepage />
      <Topbar />
      <Article title={title} />
    </>
  )
}

export default App