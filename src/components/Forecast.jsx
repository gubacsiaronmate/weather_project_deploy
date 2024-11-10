import React from 'react';
import PropTypes from 'prop-types';

function Forecast({ data }) {
    return (
        <div className="mt-4">
            <h2>7-Day Forecast</h2>
            <div className="row">
                {data.slice(1, 8).map((day, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{day.datetime}</h5>
                                <p className="card-text">
                                    <strong>Condition:</strong> {day.conditions} <br />
                                    <strong>Min Temp:</strong> {day.tempmin}°C <br />
                                    <strong>Max Temp:</strong> {day.tempmax}°C <br />
                                    <strong>Wind Speed:</strong> {day.windspeed} km/h <br />
                                    <strong>UV Index:</strong> {day.uvindex}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Forecast.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Forecast;
