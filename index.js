var cardContainer = $('.card-container');
var submit = $('.submit-btn');
submit.on("click", createNewUser);

function createNewUser() {
var toDo = $(`.name`).val();

appendNewToDo(toDo);
$('.name').val("");
}

function appendNewToDo (toDo) {
cardContainer.append (`
  <div>
  <p class = "newCard">${toDo}</p>
  <input type= "checkbox" class= "checkbox">
  </div>
  `);
  var checkbox = $('.checkbox');
  checkbox.on('click', remove);
}

function remove() {
  event.target.parentNode.remove();
}
