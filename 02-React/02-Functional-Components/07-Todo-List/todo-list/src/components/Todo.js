const Todo = (props) => {

    const todoClasses =["italic"];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return (
    
    <div className="todoDIV" >

    {/* CHECKBOX */}
    <input onChange={(event) => {
        props.handleToggleComplete(props.i);
    }} checked={props.todo.complete} type="checkbox" />

    {/* CONTENT */}
    <span className={todoClasses.join(" ")} >{props.todo.text}</span>

    {/* DELETE */}
    <button className="deleteBTN" onClick={(event) => {
        props.handleTodoDelete(props.i);
    }}> Delete </button>

    </div>
    );
}

export default Todo;