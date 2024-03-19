import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  useEffect(() => {
    getUsers()
  })


  async function getUsers() {
    const response = await axios.get('https://brunomacedo1.github.io/db.json')

    console.log(response)
  }

  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
