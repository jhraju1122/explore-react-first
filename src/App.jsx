import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
function App() {

  // const books = [
  //   {name:'physics' price:100},
  //   {name:'bio' price:110},
  //   {name:'cam' price:1100}
  // ]

   const actor = ['Sakib', 'Raj', 'Jasim']

   const singers = [
    {name:'dr.mahfuz', age: 55},
    {name:'dr.mahfuz', age: 55},
    {name:'dr.mahfuz', age: 15},
    {name:'dr.mahfuz', age: 55},
    {name:'dr.mahfuz', age: 55}
   ]
  return (
    <>
       
      <h1 className='border'>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
     

 
      <Actor name={"bappa raz"}></Actor>
      {
        actor.map(actor =><actor name={actor}></actor>)
      }
     {/* <Person></Person>
      <Developer name="watch" price="250"></Developer>
      <Student grade={5} score={9}></Student>
      <Student grade={565} score={7}></Student>
      <Student grade={75} score={8}></Student>
      <Todo task="learn react"></Todo>
      <Todo task="Learn something with jh"></Todo> */}
     
    </>
  )
}

function Person ( ) {
  const age = 25;
  const money = 225;
  const person = {name: 'jhon',  age:12};
  return(
   <h3>i am {person.name}, a student with age: {age + money}</h3>
   )
}

const {grade, score}= {grade:'7', score:'99'} 
function Student ({grade, score}) {
  const studentStyle ={
    border:'2px solid red'
  }
  console.log(grade, score);
  return(
    <div style={studentStyle} className='student'>
    <h3>this is a student</h3>
    <p>class:{grade}</p>
    <p>score:{score}</p>
    </div>

  )
}


function Developer (props) {
  console.log(props)
  const developerStyle = {
    border: '2px solid red'
  }
  return (
    <div style={developerStyle}>
      <h5>devo devo</h5>
    </div>
  )
}
export default App
