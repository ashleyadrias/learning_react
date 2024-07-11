const Part = (props) => {
    const name = props.name
    const exercises = props.exercises
    return (
        <div>
            <li>{name}:{exercises}</li>
        </div>
    )
  }

const Course = (props) => {
    const course = props.course
    const parts = course.parts
    return (
        <div>
            <h1>
                {course.name}
            </h1>
            <ul>
                {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
            </ul>
        </div>
    )
  }
  
  
  export default Course