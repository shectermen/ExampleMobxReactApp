import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import rootStore from "./rootStore/rootStore.jsx";
import TodoList from "./todo/todoList.jsx";

class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <TodoList />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
