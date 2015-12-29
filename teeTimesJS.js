$.ajax({
url:"https://www.kimonolabs.com/api/9y69xxh4?apikey=REK0Ffj1XIg1BhGMU3wDHLBv9kQbB2ur",
crossDomain: true,
dataType: "jsonp",
success: function (response) {
  //Do something with the response
  console.log(response.results.collection1[0]);
},
error: function (xhr, status) {
  //handle errors
}
});