import pandas as pd
from flask import Flask, jsonify

file = "Project 3\static\js\InfantMortalityRate.csv"
table = pd.read_csv(file, encoding='latin-1')
json_format = table.to_json(orient="index")

app = Flask(__name__)

@app.route("/")
def data():
    return json_format

if __name__ == '__main__':
    app.run(debug=True)



@app.route("/")
def data():
    return jsonify(json_format)  # Use Flask's jsonify function to return JSON data

