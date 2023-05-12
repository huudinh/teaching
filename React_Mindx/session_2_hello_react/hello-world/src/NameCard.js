function NameCard(props) {
    return (
        <div className='name-card'>
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
        </div>
    )
}
export default NameCard;