import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }

  get Template() {
    return `
    <dt class="task-list">${this.name}<button class="btn btn-outline remove-task" onclick="app.listController.removeTask('${this.listId}','${this.id}')"><i class="fas fa-backspace fa-xs"></i></button></dt>
    `;
  }
}
