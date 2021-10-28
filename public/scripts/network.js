function movies() {
  return $.ajax({
    method: "GET",
    url: "/api/movies",
  })
}
