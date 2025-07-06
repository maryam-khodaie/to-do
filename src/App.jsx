import { useState } from 'react'
import './App.css'
import Header from './components/header'
import AddForm from './components/add-form'
import TodoItems from './components/to-do-items'
import ClearButton from './components/clear-button'

function App() {
  const [todos, setTodos] = useState([])
  const handleSubmit = (todo) => {
    setTodos([...todos, todo])
  }

const handleRemove = (item) =>{

  const filteredTodos = todos.filter((f) => f!== item)
  setTodos(filteredTodos)

}
const onClear = () => {
  setTodos([])
}
  
  return (
    <div className='app'>
      <Header />
      <AddForm onSubmit={handleSubmit}/>
      <TodoItems items={todos} onRemove={handleRemove}/>
      <ClearButton onClear={onClear}/>
    </div>
  )
}



export default App
