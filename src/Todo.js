import React from 'react'

const Todo = (props) => {
    //parents => child, top => bottom
    const todos = props.todos
    return (

        <div className="todos-container" >
            {
                todos.map(todo => {
                    return (
                        <li className="todos-child" key={todo.id}> {todo.title}</li>
                    )
                })
            }


        </div>

    )
}

export default Todo
