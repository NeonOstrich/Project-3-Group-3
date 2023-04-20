

const data_url = "http://127.0.0.1:5000/api/data"
var data_api =[]
d3.json(data_url).then((data) => {
    // Bar chart by year
    data_api = data
    let year = data.map((item)=> item["Year"])
    let imr = data.map((item)=> item["Infant Mortality Rate"])
    let dataByYear = [
        {
          x: year,
          y: imr,
          type: 'bar',
          name: 'By Year'
        }
    ];
    Plotly.newPlot('barByYear', dataByYear);

    // Bar chart by country
    let country = data.map((item)=> item["Country"])
    //imr = data.map((item)=> item["Infant Mortality Rate"])
    let dataByCountry = [
        {
          x: country,
          y: imr,
          type: 'bar',
          name: 'By Country'
        }
    ];
    Plotly.newPlot('barByCountry', dataByCountry);

    // Bar chart by gender
    let gender = data.map((item)=> item["Gender"])
    //imr = data.map((item)=> item["Infant Mortality Rate"])
    let dataByGender = [
        {
          x: gender,
          y: imr,
          type: 'bar',
          name: 'By Gender'
        }
    ];

    let layout = {barmode: 'group'};


    Plotly.newPlot('barByGender', dataByGender);
});