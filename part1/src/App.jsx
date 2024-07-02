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
        <Part part = {props.part} exercise = {props.exercise} />
    </div>
  )
}


const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course  = {course} />
      <Content part = {part1} exercise = {exercises1} />
      <Content part = {part2} exercise = {exercises2} />
      <Content part = {part3} exercise = {exercises3} />
    </div>
  )
}

export default App

