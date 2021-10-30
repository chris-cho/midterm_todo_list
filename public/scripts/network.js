function movies() {
  return $.ajax({
    method: "GET",
    url: "/api/movies",
  })
}

function products() {
  return $.ajax({
    method: "GET",
    url: "/api/products",
  })
}

function lists() {
  return $.ajax({
    method: "GET",
    url: "/api/lists",
  })
}
