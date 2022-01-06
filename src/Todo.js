import React from 'react'

const Todo = (props) => {
    //parents => child, top => bottom
    // const todos = props.todos
    const { todos, title, deleteDataTodo } = props
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
    return (
        <div className="todos-container" >
            <div className="title">
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className="todos-child">{todo.title}</li>
                        <span onClick={() => handleDelete(todo.id)}>x</span>
                    </div>
                )
            })
            }

            <hr />
        </div>

    )
}

export default Todo
