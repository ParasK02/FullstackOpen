const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  const Header = ({ course }) => {
   
    return (
      
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ course }) => {
    return (
      course.parts.map((part, index) => {
        return (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        );
      })
    );
  }
  
  
  const Total = ({course}) => {
    var total = 0;

    return (
      <div>
        {course.parts.map((part)=>{
          total += part.exercises;
        })}
        <p>Number of exercises {total}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
       <Total 
        course={course} 
      />
      
    </div>
  )
}

export default App
