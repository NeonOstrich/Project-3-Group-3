const data_url = "http://127.0.0.1:5000/api/data"
// console.log(data2)
d3.json(data_url).then((data) => {
    year = data.map((item)=> item["Year"])
    imr = data.map((item)=> item["Infant Mortality Rate"])
    console.log(country)
    var data2 = [
        {
          x: year,
          y: imr,
          type: 'bar'
        }
      ];
      Plotly.newPlot('bar', data2);
console.log(data)
})


