import { TodoItem } from "../interfaces/TodoItem";

export default class Todo implements TodoItem {

    constructor(
        private _id: string = "",
        private _text: string = "",
        private _checked: boolean = false
    ) { }

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get text(): string {
        return this._text
    }

    set text(text: string) {
        this._text = text
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}