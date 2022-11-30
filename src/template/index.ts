import { TodoTemplate } from "../interfaces/TodoTemplate";
import Todos from "../classes/Todos";

export default class Template implements TodoTemplate {

    static instance: Template = new Template()

    ul: HTMLUListElement

    private constructor() {
        this.ul = document.getElementById("todo-list") as HTMLUListElement
    }

    emptyTemplate(): void {
        this.ul.innerHTML = ""
    }

    render(todoList: Todos): void {
        this.emptyTemplate()

        todoList.todos.forEach((todo) => {
            const li = document.createElement("li")
            li.className = "todo-item"

            const input = document.createElement("input")
            input.type = "checkbox"
            input.id = todo.id
            input.tabIndex = 0
            input.checked = todo.checked

            input.addEventListener("change", () => {
                todo.checked = !todo.checked
                todoList.save()
            })

            li.append(input)

            const label = document.createElement("label")
            label.htmlFor = todo.id
            label.textContent = todo.text
            li.append(label)

            const button = document.createElement("button")
            button.className = "btn"
            button.textContent = "Delete"
            li.append(button)

            button.addEventListener("click", () => {
                todoList.deleteTodo(todo.id)
                this.render(todoList)
            })

            this.ul.append(li)
        })
    }
}