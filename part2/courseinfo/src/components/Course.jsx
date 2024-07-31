/* eslint-disable react/prop-types */
import Header from "./Header";
import Content from "./Content";
import Total from "./Total"

const Course = (props) => {
    const {course} = props
    return (
        <div>
            <h1>Web Developmen Curriculum</h1>
            {course.map((courses)=>{
                return(
                    <div key={courses.id}>
                        <Header name={courses.name}/>
                        <Content content={courses.parts}/>
                        <Total number={courses.parts}/>
                    </div>
                )
            })}
            

           
        </div>
    )
};



export default Course;
