import $ from "jquery";
import _ from "lodash";
import '../css/main.css';

let count = 0;

$(document).ready(function () {
  $("body").append("<div id='logo'></div>")
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<div class='buttonandtext'></div>");
  $('.buttonandtext').append("<button>Click here to get started</button>");
  $('.buttonandtext').append('<p id="count"></p>');
  $("body").append("<p>Copyright - Holberton School</p>");
});

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

$(document).ready(function () {
  const debouncedUpdate = _.debounce(updateCounter, 500);

  $("button").on("click", debouncedUpdate);
});
