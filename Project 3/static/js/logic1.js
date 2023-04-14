// var data = ("InfantMortalityRate.csv")
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// // Creating the map object
// var myMap = L.map("map", {
//     center: [27.96044, -82.30695],
//     zoom: 3
//   });
  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);

//   d3.json(queryURL).then(function(data){
//   })

//   # return color based on value
//   function getValue(x) {
//       return x > 7 ? "#800026" :
//              x > 6.5 ? "#BD0026" :
//              x > 6 ? "#E31A1C" :
//              x > 5.5 ? "#FC4E2A" :
//              x > 5 ? "#FD8D3C" :
//              x > 4.5 ? "#FEB24C" :
//              x > 4 ? "#FED976" :
//                  "#FFEDA0";
//   }


// Loading the CSV file
d3.csv("InfantMortalityRate.csv")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

// Creating the map object
var myMap = L.map("map", {
  center: [27.96044, -82.30695],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Function to return color based on value
function getValue(x) {
  return x > 7 ? "#800026" :
         x > 6.5 ? "#BD0026" :
         x > 6 ? "#E31A1C" :
         x > 5.5 ? "#FC4E2A" :
         x > 5 ? "#FD8D3C" :
         x > 4.5 ? "#FEB24C" :
         x > 4 ? "#FED976" :
             "#FFEDA0";
}