const Course = (props) => {
    const {courses} = props
    return (
        <div>
            <h1>Half Stack application development</h1>
            {props.courses.map((c) => (
                <p key={c.id}> {c.name} {c.exercieses} </p>
            ))}
        </div>
    );
};



export default Course;
