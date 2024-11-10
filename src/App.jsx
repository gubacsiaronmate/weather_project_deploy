import { useState } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import Forecast from "./components/Forecast.jsx";
import Error from "./components/Error.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";  // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    
    const API_KEY = '2MQT42QHYM6GBCYR7TGQ6KKRZ';
    
    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`);
            if (!response.ok) { throw new Error('City not found'); }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setWeatherData(null);
            setError(err.message);
        }
    };
    
    return (
        <div className="app">
            <SearchBar setCity={setCity} fetchWeather={fetchWeather} />
            {error && <Error message={error} />}
            {weatherData && (
                <>
                    <CurrentWeather data={weatherData} />
                    <WeatherDetails data={weatherData} />
                </>
            )}
        </div>
    );
}

export default App;
