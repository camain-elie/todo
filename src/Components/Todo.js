import './todo.scss'

function Todo(props){

    return (
        <div className="todo">
            <input type="checkbox" className="todo__check" checked={props.completed} onChange={props.handleChange}></input>
            <p className={`todo__text ${props.completed ? 'todo__text--completed' : ''}`} >{props.todo}</p>

            <div className="todo__delete"></div>
        </div>
    )
}

export default Todo