import { generateId } from "../utils.js";
import Task from "../Models/Task.js";

export default class List {
  constructor({ id = generateId(), name, tasks }) {
    this.name = name;
    this.id = id;
    this.tasks = tasks.map(t => new Task(t));
  }
  get Template() {
    return `
    <div class="col-4 mt-2 p-2 border bg-info">
        <h3 class="text-center border-bottom">${
          this.name
        } <button class="btn btn-outline btn-danger ml-1" onclick="app.listController.removeList('${
      this.id
    }')">Remove</button></h3>
        <dl class="ml-3">${this.getTaskTemplates()}</dl>
    </div>
          `;
  }

  getTaskTemplates() {
    let template = "";
    this.tasks.forEach(task => {
      template += task.Template;
    });
    return template;
  }
}
