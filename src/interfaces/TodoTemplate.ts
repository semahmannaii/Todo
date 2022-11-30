import Todos from "../classes/Todos"

export interface TodoTemplate {
    ul: HTMLUListElement
    emptyTemplate(): void
    render(todoList: Todos): void
}