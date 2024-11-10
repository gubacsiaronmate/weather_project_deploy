import React from 'react';
import PropTypes from 'prop-types';

function WeatherDetails({ data }) {
    const weekData = data.days.slice(0, 7);
    
    const checkWinterTireRecommendation = (temp) => temp < 7;
    const checkHighUVIndex = (uvindex) => uvindex >= 6;
    
    return (
        <div className="weather-details mt-4">
            <h2 className="mb-4">7-Day Weather Forecast for {data.resolvedAddress}</h2>
            
            {weekData.map((day, index) => (
                <div key={index} className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{day.datetime}</h5>
                        <p><strong>Temperature:</strong> {day.temp}°C (Min: {day.tempmin}°C, Max: {day.tempmax}°C)</p>
                        <p><strong>Weather Condition:</strong> {day.conditions}</p>
                        <p><strong>Humidity:</strong> {day.humidity}%</p>
                        <p><strong>Wind Speed:</strong> {day.windspeed} km/h</p>
                        <p><strong>Sunrise:</strong> {day.sunrise}</p>
                        <p><strong>Sunset:</strong> {day.sunset}</p>
                        
                        {checkWinterTireRecommendation(day.temp) && (
                            <div className="alert alert-warning mt-3" role="alert">
                                🚨 <strong>Alert:</strong> The average temperature is below 7°C. It is recommended to use winter tires on your vehicle.
                            </div>
                        )}
                        
                        {checkHighUVIndex(day.uvindex) && (
                            <div className="alert alert-warning mt-3" role="alert">
                                ☀️ <strong>Alert:</strong> High UV index detected. Please take precautions when going outside.
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

WeatherDetails.propTypes = {
    data: PropTypes.shape({
        resolvedAddress: PropTypes.string.isRequired,
        days: PropTypes.arrayOf(PropTypes.shape({
            datetime: PropTypes.string.isRequired,
            temp: PropTypes.number.isRequired,
            tempmin: PropTypes.number.isRequired,
            tempmax: PropTypes.number.isRequired,
            conditions: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            windspeed: PropTypes.number.isRequired,
            sunrise: PropTypes.string.isRequired,
            sunset: PropTypes.string.isRequired,
            uvindex: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
};

export default WeatherDetails;
