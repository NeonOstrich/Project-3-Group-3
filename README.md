# Project-3-Group-3

##Abstract
This project is focused on exploring infant mortality rates across the world, using a dataset of infant mortality rates across different countries and years (2009 till 2019). The main aim of the project is to provide a way for users to interactively explore the data and gain insights into trends and patterns in infant mortality rates.

##Introduction
Infant mortality is an important issue that affects millions of families across the world. Infant mortality rates are often used as an indicator of the overall health and well-being of a population, as well as the quality of healthcare available to mothers and infants. Studying infant mortality rates can help identify areas where healthcare and public health interventions are needed, as well as provide insights into the effectiveness of existing interventions.
The dataset used in this project contains information on infant mortality rates across different countries and years, as well as additional demographic information such as biological sex of the infant. The dataset was obtained from the Kaggle and covers data from the year 2009 till 2019.

##Method
The project uses a combination of Python, Flask, and JavaScript to create an interactive web application that allows users to explore the dataset. The Flask framework is used to create a web server that serves the HTML, CSS, and JavaScript files for the web application, as well as an API endpoint for retrieving the data from the dataset. The JavaScript library Plotly is used to create interactive charts and visualizations of the data.

##Flask
The Flask API is responsible for serving the data from the CSV file to the front-end JavaScript code. It uses the Flask framework, a lightweight Python web framework, to create routes that return data in JSON format.
The Flask app is defined in app.py. It reads the CSV file using the Pandas library, and converts it to a list of dictionaries. Each dictionary in the list represents a row in the CSV file. Then the app route decorator defines the route for the API. When the route is accessed, the function is executed, which reads the CSV file, converts it to a list of dictionaries, and returns it in JSON format.

##JavaScript
The JavaScript code is responsible for rendering the visualizations using the data from the Flask API. It uses the d3 and plotly libraries to create the charts.The example4.js  file is the main crux of the project as it contains the JavaScript code for rendering the visualizations.The code fetches data from the Flask API using d3 and then once the data is loaded, it creates three bar charts using the plotly library. The main chart is a bar chart that shows the infant mortality rate for a selected country or region, broken down by year. What we want is for the user to be able to select a country or region from a drop-down list, and the chart updates to show the corresponding data. But the project dragged on and as a result we couldn’t fulfill the goal but the current charts show the infant mortality rate broken down by year, country, and gender.

##HTML
The HTML code for this project defines the structure of the web page and specifies which external resources to load, such as Bootstrap CSS and Plotly JavaScript libraries. It also includes the main content of the page, which is divided into several elements with different class and id attributes.
Overall, the HTML code provides the basic structure and layout for the web page, and is responsible for loading external resources and defining the main content of the page.

##Who this Helps
The project could be beneficial for public health researchers, policymakers, and healthcare professionals who are interested in studying infant mortality rates and identifying areas where healthcare interventions are needed. The interactive nature of the web application allows users to gain insights into the data that may not be immediately apparent from static charts or tables.
There are several ways that the project could be improved. For example, additional demographic data such as maternal education level or income could be included to provide a more comprehensive picture of the factors that contribute to infant mortality rates. We could also finally implement the dropdown menu and allow for a better user friendly experience. Also, the user interface could also be improved to make it more intuitive and user-friendly, for example by including tooltips or hover effects to provide additional information about the data.

##Conclusion
Overall, this project demonstrates the potential of using data visualization and interactive tools to explore and understand complex issues such as infant mortality. By making data more accessible and engaging, it can help inform decision-making and drive positive change.
