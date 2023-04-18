import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template

engine = create_engine("sqlite:///infant_mortality.db")

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')



@app.route("/api/data")
def data_func():
    conn = engine.connect()
    df = pd.read_sql('Select * From infant_mortality', conn)
    data = df.to_dict(orient="records")
    return jsonify(data)  # Use Flask's jsonify function to return JSON data

if __name__ == '__main__':
    app.run(debug=True)
