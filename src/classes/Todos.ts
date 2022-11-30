import { TodoItem } from "../interfaces/TodoItem";
import { TodoList } from "../interfaces/TodoList";
import Todo from "./Todo";

export default class Todos implements TodoList {
    static instance: Todos = new Todos()

    private constructor(private _todos: TodoItem[] = []) { }

    get todos(): TodoItem[] {
        return this._todos
    }

    load(): void {
        const storedTodo: string | null = localStorage.getItem("todo-ts")
        if (storedTodo === null) return

        const parsedTodo: { _id: string, _text: string, _checked: boolean }[] = JSON.parse(storedTodo)

        parsedTodo.forEach(todo => {
            const newTodo = new Todo(todo._id, todo._text, todo._checked)
            Todos.instance.addTodo(newTodo)
        })
    }

    save(): void {
        localStorage.setItem("todo-ts", JSON.stringify(this._todos))
    }

    addTodo(todo: TodoItem): void {
        this._todos.push(todo)
        this.save()
    }

    deleteTodo(id: string): void {
        this._todos = this._todos.filter((todo) => todo.id !== id)
        this.save()
    }

    clearTodos(): void {
        this._todos = []
        this.save()
    }
}