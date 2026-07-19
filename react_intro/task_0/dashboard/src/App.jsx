import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <div className="App-header">
        <img src="assets/holberton-logo.jpg" alt="holberton logo"></img>
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {new Date().getFullYear()} - holberton School</p>
      </div>
    </>
  )
}

export default App
