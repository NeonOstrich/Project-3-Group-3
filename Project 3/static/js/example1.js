const data_url = "http://127.0.0.1:5000/api/data"
// console.log(data2)
d3.json(data_url).then((data) => {
    gender = data.map((item)=> item["Gender"])
    imr = data.map((item)=> item["Infant Mortality Rate"])
    console.log(country)
    var data2 = [
        {
          x: gender,
          y: imr,
          type: 'bar'
        }
      ];
      

      Plotly.newPlot('bar', data2);
console.log(data)
})