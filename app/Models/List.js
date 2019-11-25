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
    <div class="col-12 col-sm-6 col-md-4 mt-2 p-2 list-cols">
      
        <h4 class="list-title">${
          this.name
        } <button class="btn btn-outline btn-sm list-btn ml-1" onclick="app.listController.removeList('${
      this.id
    }')"><i class="far fa-times-circle fa-xs"></i></button></h4>
        <form class="border-bottom" onsubmit="app.listController.addTask(event, '${
          this.id
        }')">
        <div class="form-group">
          <label for="name">New Task</label>
          <input type="text" class="form-control special-form" id="name" placeholder="Enter task" />
        </div>
        <button type="submit" class="btn submit-btn">Submit</button>
        </form>
        <dl class="ml-3 mt-2">${this.getTaskTemplates()}</dl>
      
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
