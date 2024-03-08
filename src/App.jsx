import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  return (
    <>
       
      <h1>Vite + React</h1>
     <Person></Person>
     <Person></Person>
    </>
  )
}

function Person ( ) {
  const age = 25;
  const money = 225;
  const person = {name: 'jhon',  age:12};
  return(
   <h3>i am {person.name}, a student with age: {age + money}</h3>)
}

export default App
