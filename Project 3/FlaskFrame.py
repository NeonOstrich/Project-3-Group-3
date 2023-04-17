import pandas as pd
from flask import Flask, jsonify

file = "InfantMortalityRate.csv"
table = pd.read_csv(file)
json_format = table.to_json(orient="index")

app = Flask(__name__)

@app.route("/")
def data():
    return json_format

if __name__ == '__main__':
    app.run(debug=True)
