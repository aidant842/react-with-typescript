class Todo {
    id: number;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = Math.random();
    }
}

export default Todo;
