console.log("Hello from javascript")

// Read in data from Flask
const url = "http://127.0.0.1:5000/api/data"

d3.json(url).then(function(data) {
console.log(data)
// Close the .then function
});
