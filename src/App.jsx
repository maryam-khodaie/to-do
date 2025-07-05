import { useState } from 'react'
import './App.css'
import Header from './components/header'
import AddForm from './components/add-form'
import TodoItems from './components/to-do-items'

function App() {
  

  return (
    <div className='app'>
      <Header />
      <AddForm/>
      <TodoItems />
    </div>
  )
}



export default App
