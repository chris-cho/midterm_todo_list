$(() => {
  $(".card").on(function(event) {
    console.log("click");
    event.preventDefault();
    movies();
  });

  $(".button-36").on(function(event) {
    console.log("click");
    event.preventDefault();
    movies();
  });
});
