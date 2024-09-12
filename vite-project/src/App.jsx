import { useState } from 'react';
import './App.css'
import { countries, states, capitals } from './data/data';
import Countries from './pages/Countries';
import States from './pages/States';
import Capital from './pages/Capital';

const App = () => {
  const [filteredStates, setFilteredStates] = useState(states);
  const [filteredCountries] = useState(countries);
  const [filteredCapitals, setFilteredCapitals] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (event) => {
    const countryId = parseInt(event.target.value);
    setSelectedCountry(countryId);

    if (countryId) {
      setFilteredStates(states.filter(state => state.countryId === countryId));
    } else {
      setFilteredStates(states);
    }

    setSelectedState('');
    setFilteredCapitals([]);
  };

  const handleStateChange = (event) => {
    const stateId = parseInt(event.target.value);
    setSelectedState(stateId);

    if (stateId) {
      const selectedState = states.find(state => state.stateId === stateId);
      setSelectedCountry(selectedState.countryId);
      setFilteredCapitals(capitals.filter(capital => capital.stateId === stateId));
    } else {
      setFilteredCapitals([]);
    }
  };

  return (
     <div className="dropdown-container">
      <h3>Load States based on countries</h3>
      {/* Country Dropdown */}
       <select className="dropdown" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <Countries filteredCountries={filteredCountries}/>
      </select>

      {/* State Dropdown */}
       <select className="dropdown" value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
       <States filteredStates={filteredStates}/>
      </select>

      {/* Capital Dropdown */}
      <select className="dropdown" disabled={!selectedState}>
        <option value="">Select Capital</option>
        <Capital filteredCapitals={filteredCapitals}/>
      </select>
    </div>
  );
};

export default App;


