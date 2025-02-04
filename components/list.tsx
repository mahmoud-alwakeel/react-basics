
type ListParam = {
    description: String,
}

function List(props: ListParam) {
    return (
        <p>{props.description}</p>
    );
}

export default List;