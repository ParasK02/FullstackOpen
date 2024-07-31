import Header from "./Header";
import Part from "./Part";

const Course = (props) => {
    const {course} = props
    return (
        <div>
            <Header name={course.name}/>
            {course.parts.map(part => <Part key={part.id} content={part}/>)}

           
        </div>
    );
};



export default Course;
