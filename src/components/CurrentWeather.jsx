import React from 'react';
import PropTypes from 'prop-types';

function CurrentWeather({ data }) {
    const currentData = data.currentConditions;
    
    return (
        <div className="weather-details mt-4">
            <h2 className="mb-4">Current Weather in {data.resolvedAddress}</h2>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Today's Weather</h5>
                    <p><strong>Temperature:</strong> {currentData.temp}°C</p>
                    <p><strong>Weather Condition:</strong> {currentData.conditions}</p>
                    <p><strong>Humidity:</strong> {currentData.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {currentData.windspeed} km/h</p>
                    <p><strong>UV Index:</strong> {currentData.uvindex}</p>
                    <p><strong>Sunrise:</strong> {currentData.sunrise}</p>
                    <p><strong>Sunset:</strong> {currentData.sunset}</p>
                    
                    {currentData.temp < 7 && (
                        <div className="alert alert-warning mt-3" role="alert">
                            🚨 <strong>Alert:</strong> The temperature is below 7°C. It is recommended to use winter tires on your vehicle.
                        </div>
                    )}
                    
                    {currentData.uvindex >= 6 && (
                        <div className="alert alert-warning mt-3" role="alert">
                            ☀️ <strong>Alert:</strong> High UV index detected. Please take precautions when going outside.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

CurrentWeather.propTypes = {
    data: PropTypes.shape({
        resolvedAddress: PropTypes.string.isRequired,
        currentConditions: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            conditions: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            windspeed: PropTypes.number.isRequired,
            uvindex: PropTypes.number.isRequired,
            sunrise: PropTypes.string.isRequired,
            sunset: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default CurrentWeather;
