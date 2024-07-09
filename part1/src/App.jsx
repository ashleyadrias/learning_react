import { useState } from 'react'

const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <div>
      <h2>
        {props.part} : {props.exercise}
      </h2>
    </div>
  )
}



const Content = (props) => {
  //console.log(props)
  return (
    <div>
      {Array.isArray(props.parts) && props.parts.map((value, index) => (
        <Part
          key={index}
          part={value.name}
          exercise={value.exercises}
        />
      ))}
    </div>
  )
}

const Display = (props) => {
  return (
    <div> {props.counter} </div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // define counter state
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)
  
  //separate the event handlers into separate functions
  const upVote    = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  
  
  const downVote  = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  
  
  const resetVote = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Header  course = {course} />
      <Content parts  = {parts} /> 
      <Display counter = {counter} />
      <Button onClick = {upVote} text = '+1'></Button>
      <Button onClick = {downVote} text = '-1'></Button>
      <Button onClick = {resetVote} text = 'reset'></Button>
    </div>
  )
}

export default App




