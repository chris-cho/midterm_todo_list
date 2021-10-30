$(document).ready(function() {
  $(".watch").click(function(event) {
    console.log("click");
    event.preventDefault();
    movies();
  });
  $(".buy").click(function(event) {
    console.log("click");
    event.preventDefault();
    products();
  });
  $(".list").click(function(event) {
    console.log("click");
    event.preventDefault();
    lists();
  });
});
