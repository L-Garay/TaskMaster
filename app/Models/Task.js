import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }

  get Template() {
    return `
    <dt class="task-list"><input type="checkbox" class="check" id="complete" onclick="app.listController.check()"> ${this.name}<button class="btn btn-outline remove-task" onclick="app.listController.removeTask('${this.listId}','${this.id}')"><i class="fas fa-times-circle fa-xs"></i></i></button></dt>
    `;
  }
}
