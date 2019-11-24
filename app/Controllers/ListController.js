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
    formData.reset();
  }
  removeList(listId) {
    swal({
      title: "Are you sure about this?",
      text: "I won't tell anyone if you change your mind.",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Good-on-ya, go celebrate!", {
          icon: "success"
        });
        ListService.removeList(listId);
        _drawLists();
      } else {
        swal("Your mother would be proud!");
      }
    });
  }

  addTask(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newTask = {
      name: formData.name.value,
      listId: listId
    };
    ListService.addTask(newTask);
    formData.reset();
    _drawLists();
  }

  removeTask(listId, taskId) {
    swal({
      title: "Oh really?",
      text: "Once deleted, there is no going back..",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Bye-bye! Your task has been eviscerated!", {
          icon: "success"
        });
        ListService.removeTask(listId, taskId);
        _drawLists();
      } else {
        swal("Yeah, that's what I thought.");
      }
    });
  }
}
