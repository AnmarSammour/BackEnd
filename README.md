# Node.js Learning Projects

Practical **Node.js** projects built while learning, covering CLI apps, web servers, and API integrations — growing with every new concept mastered.

---

# First App _ Person Manager CLI
<h3>A Node.js command-line application for managing person data</h3>

## 📋 Features
- ✅ Add up to 10 persons with unique IDs  
- 👀 View all persons or specific person details  
- 🗑️ Delete single person or all records  
- 📊 View full name (first + last) and city for each person  
- 🔒 Data validation to prevent duplicates  

## 🏗️ Project Structure
```
person-manager/
├── src/
│   ├── app.js
│   ├── commands/
│   │   ├── add.js
│   │   ├── delete.js
│   │   ├── list.js
│   │   └── read.js
│   ├── models/
│   │   └── person.js
│   ├── utils/
│   │   └── fileUtils.js
│   └── data/
│       └── persons.json
├── package.json
└── README.md
```
## 💻 Usage

### Add a person
```bash
node src/app.js add --id 1 --fname Anmar --lname Sammour --age 24--city AlBirah
```

### List persons
```bash
# Simple view (name + city)
node src/app.js list --simple

# Detailed view
node src/app.js list
```

### View specific person
```bash
node src/app.js read --id 1
```

### Delete data
```bash
# Delete specific person
node src/app.js delete --id 1

# Delete all persons
node src/app.js delete --all
```
---
# Second App - Weather Country CLI  
<h3>A Node.js command-line application for getting weather data by country</h3>  

## 🌦️ Features  
- 🔍 Search weather by country name  
- 📍 Get precise coordinates (lat/long)  
- 🌡️ View temperature in Celsius  
- ☀️ Get current weather condition  
- 🗺️ Display location details  

## 🏗️ Project Structure  
```
weather-country-app/
├── data/
│   ├── geocode.js         
│   ├── forecast.js
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## 💻 Usage  
```bash
# Basic usage
node src/app.js "Country Name"

# Example:
node src/app.js palestine
```

## 📜 Sample Output  
```

Searching for "palestine"...
Found coordinates: Latitude 31.88333, Longitude 35.2

Weather Info:
Location: Ramallah
Temperature: 25.2°C
Longitude: 35.2
Latitude: 31.88333
```

## 🔧 Error Handling  
- ❌ Invalid country name  
- 🌐 API connection errors  
- 📍 Missing coordinates data  

---

# Third App - WeatherFinder Web App  
<h3>A web application to search for weather information by country using a graphical interface</h3>  

## ☁️ Features  
- 🌍 Search weather by country name  
- 📍 Get latitude and longitude  
- ☀️ Show current weather and temperature  
- ❗ Graceful error handling  
- 💡 Responsive UI with styled messages  

## 🏗️ Project Structure  
```
WeatherFinder/
├── public/        # Static files (CSS, JS, Images)
├── src/           # Server-side code
│   ├── routes/
│   ├── tools/
│   └── app.js
├── views/         # Handlebars templates
├── package.json
└── README.md
```

## 🧠 Technologies Used  
- Express.js - Web server framework  
- Handlebars (hbs) - Templating engine  
- Mapbox API - Geocoding  
- WeatherAPI - Current weather data  
- NPM - Dependency management  
---

## 💻 Usage  

### Start the server:
```bash
node src/app.js
```

### Open in browser:
```
http://localhost:3000
```

### Search for a country:
- Enter country name in input field  
- Click "Find weather"  
- View result or error message  

---

## 📦 Sample Output

**Input:**  
```
Country: Palestine
```

**Output:**  
```
Country: Palestine  
Latitude: 31.88333  
Longitude: 35.2  
Forecast: Partly cloudy, 25.2°C
```
---

## 📝 Notes  
- Replace API keys in `geocode.js` and `forecast.js` with your own  
- Public APIs used: Mapbox, WeatherAPI  

---