from flask import Flask, render_template, request
import numpy as np
import joblib
import os

app = Flask(__name__)

# Check if model exists
if not os.path.exists("model.pkl"):
    print("Model file not found!")
    exit()

model = joblib.load("model.pkl")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    hour = float(request.form['hour'])
    temp = float(request.form['temperature'])
    humidity = float(request.form['humidity'])
    windspeed = float(request.form['windspeed'])

    input_data = np.array([[hour, temp, humidity, windspeed]])
    prediction = model.predict(input_data)

    return render_template(
        'index.html',
        prediction_text=f"Predicted Bike Count: {int(prediction[0])}"
    )

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)