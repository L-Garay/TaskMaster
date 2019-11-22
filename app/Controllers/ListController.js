import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = "";
  let lists = store.Lists;
  lists.forEach(list => {
    listTemplate += list.Template;
  });
  document.querySelector("#lists").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      name: formData.name.value,
      tasks: []
    };
    ListService.addList(newList);
    _drawLists();
  }
  removeList(listId) {
    ListService.removeList(listId);
    _drawLists();
  }
}
