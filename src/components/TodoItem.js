import React from 'react';

class TodoItem extends React.Component {
    render() {
        // Adding a line-through to a completed task in the to-dos list
        // add the following styles in the render() method but above the return statement:
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        // Using Destructuring
        const { completed, id, title } = this.props.todo

        return (
            <li className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.todo.completed}
                    onChange={() => this.props.handleChangeProps(id)}
                /> 
                <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete
                </button>
                <span style={completed ? completedStyle : null}>{title}</span>
             </li>
        )
    }
}

export default TodoItem;
