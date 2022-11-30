import "./index.css"
import Todos from "./classes/Todos"
import Todo from "./classes/Todo"
import Template from "./template"

function App(): void {
    const todoList = Todos.instance
    const template = Template.instance

    const initialForm = document.getElementById("initialForm") as HTMLFormElement

    initialForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        const input = document.getElementById("inputForm") as HTMLInputElement
        const inputText: string = input.value.trim()
        if (inputText.length === 0) return

        let todoId: number

        if (todoList.todos.length) {
            todoId = parseInt(todoList.todos[todoList.todos.length - 1].id) + 1
        } else {
            todoId = 1
        }

        const newTodo = new Todo(todoId.toString(), inputText)

        todoList.addTodo(newTodo)

        template.render(todoList)
    })

    const clearTodos = document.getElementById("clearTemplate") as HTMLButtonElement

    clearTodos?.addEventListener("click", (): void => {
        todoList.clearTodos()
        template.emptyTemplate()
    })

    todoList.load()
    template.render(todoList)
}

document.addEventListener("DOMContentLoaded", App)