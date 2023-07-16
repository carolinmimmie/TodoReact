class Todo {
  //Typa klassens properties i constuktorn
  constructor(
    public id: number,
    public todo: string,
    public completed: boolean
  ) {
    this.id = id;
    this.todo = todo;
    this.completed = completed;
  }
}
export default Todo;
