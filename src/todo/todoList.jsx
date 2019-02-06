import React, { Fragment } from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.getTodos = () => this.props.todoStore.fetchTodos();
  }

  componentWillMount() {
    this.getTodos();
  }
  render() {
    const { todoStore } = this.props;
    return (
      <Fragment>
        {todoStore.todos.map(todo => (
          <h4 key={todo.id}>{todo.title}</h4>
        ))}
      </Fragment>
    );
  }
}

export default TodoList;
