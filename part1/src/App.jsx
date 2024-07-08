import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
        {props.part} : {props.exercise}
      </h2>
    </div>
  )
}



const Content = (props) => {
  console.log(props)
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

  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} /> 
      {/* <Total parts={parts} /> */}
      {counter}
    </div>
  )
}

export default App




