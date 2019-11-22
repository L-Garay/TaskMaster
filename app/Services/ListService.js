import List from "../Models/List.js";
import store from "../store.js";
import Task from "../Models/Task.js";

//Public
class ListService {
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
