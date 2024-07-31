const Part = (props) => {
    const {content} = props;
   
    return (
        <p key={content.id}>{content.name} {content.exercises}</p>
    );
};
export default Part;