function products() {
  return $.ajax({
    method: "GET",
    url: "/api/products",
  })
}
