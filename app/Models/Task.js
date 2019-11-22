import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }

  get Template() {
    return `
    <dt>${this.name}</dt>
    <button class="btn btn-danger btn-outline" onclick="app.listController.removeTask('${this.listId}','${this.id}')">Remove Task</button>`;
  }
}
