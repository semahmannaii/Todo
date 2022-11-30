import { TodoItem } from "./TodoItem";

export interface TodoList {
    todos: TodoItem[]
    load(): void
    save(): void
    addTodo(todo: TodoItem): void
    deleteTodo(id: string): void
    clearTodos(): void
}