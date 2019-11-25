import List from "../Models/List.js";
import store from "../store.js";
import Task from "../Models/Task.js";

//Public
class ListService {
  check() {
    store.saveState();
  }
  removeTask(listId, taskId) {
    let listRemovedFrom = store.State.lists.find(l => l.id == listId);
    let taskIndex = listRemovedFrom.tasks.findIndex(t => t.id == taskId);
    listRemovedFrom.tasks.splice(taskIndex, 1);
    store.saveState();
  }
  addTask(newTask) {
    let freshTask = new Task(newTask);
    let specificList = store.State.lists.find(l => l.id == freshTask.listId);
    specificList.tasks.push(freshTask);
    store.saveState();
  }
  removeList(listId) {
    let removedList = store.State.lists.findIndex(l => l.id == listId);
    store.State.lists.splice(removedList, 1);
    store.saveState();
  }
  addList(newList) {
    let freshList = new List(newList);
    store.State.lists.push(freshList);
    store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
