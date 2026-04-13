# 🚴 BikePulse AI | Rental Demand Predictor

**BikePulse AI** is a premium, high-performance web application designed to predict hourly bike rental demand using advanced Machine Learning. Built with a sleek, responsive dark-mode interface, it provides real-time analytics based on environmental factors like temperature, humidity, and wind speed.

## ✨ Features

- **🚀 AI-Powered Predictions**: Uses a robust Random Forest Regression model for high-accuracy demand forecasting.
- **💎 Premium UI**: A modern, dashboard-style interface featuring glassmorphism, animated gradients, and Lucide icons.
- **📱 Perfectly Responsive**: Fully optimized for mobile, tablet, and desktop viewports.
- **⚡ Real-time Feedback**: Interactive form validation and animated results visualization.
- **📊 Environmental Analysis**: Predicts demand based on time of day, temperature, humidity, and wind conditions.

## 🛠️ Technologies Used

- **Backend**: Python, Flask
- **Machine Learning**: Scikit-learn, NumPy, Joblib
- **Frontend**: HTML5 (Semantic), CSS3 (Modern Grid/Flexbox), JavaScript (ES6+), Lucide Icons
- **Design System**: Custom design system with advanced glassmorphism and animation tokens.

## 📁 Project Structure

```bash
bike-demand-project/
├── app.py             # Flask application & Prediction API
├── trainModel.py      # ML Model training script
├── model.pkl          # Serialized Random Forest model
├── data.csv           # dataset for training
├── requirements.txt   # Project dependencies
├── static/
│   ├── style.css      # Premium design system & animations
│   └── script.js      # Frontend logic & UI interactions
└── templates/
    └── index.html     # Responsive dashboard template
```

## 🚀 Getting Started

### 1. Requirements
Ensure you have Python 3.8+ installed.

### 2. Setup Environment
```bash
# Clone the repository
git clone https://github.com/Shubham-Kumar-1/bike-demand-project.git
cd bike-demand-project

# Install dependencies
pip install flask numpy scikit-learn joblib
```

### 3. Run the Application
```bash
python app.py
```
Open your browser and navigate to `http://127.0.0.1:5000`.

## 👨‍💻 Author

**Shubham Kumar** - *Developer & AI Enthusiast*

---
© 2026 BikePulse AI. All rights reserved.
