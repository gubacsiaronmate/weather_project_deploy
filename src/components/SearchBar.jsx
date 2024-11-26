import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ setCity, fetchWeather }) {
    const [inputValue, setInputValue] = useState('');
    
    const handleSearch = () => {
        fetchWeather(inputValue);
        setCity(inputValue);
    };
    
    return (
        <div className="search-bar d-flex justify-content-center mt-4 mb-4">
            <div className="input-group w-250">
                <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Enter city name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    aria-label="City name"
                />
                <button
                    className="btn btn-primary rounded-right"
                    onClick={handleSearch}
                    aria-label="Search city"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    setCity: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
};

export default SearchBar;
