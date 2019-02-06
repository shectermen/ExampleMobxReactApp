import axios from "axios";
import { observable, action } from "mobx";

class todoStore {
  @observable error = null;
  @observable isFetching = false;
  @observable todos = [];

  @action
  async fetchTodos() {
    this.isFetching = true;
    this.error = null;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.todos = response.data;
      this.isFetching = false;
    } catch (error) {
      this.error = error;
      this.isFetching = false;
    }
  }
}

export default new todoStore();
