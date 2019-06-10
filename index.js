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

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Aug 7, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)
