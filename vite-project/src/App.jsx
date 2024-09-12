import { useState } from 'react';
import './App.css'
// Sample data
const countries = [
  { countryId: 1, name: 'India' },
  { countryId: 2, name: 'USA' },
  { countryId: 3, name: 'Canada' },
];

const states = [
  { stateId: 1, name: 'Telangana', countryId: 1 },
  { stateId: 2, name: 'Maharashtra', countryId: 1 },
  { stateId: 3, name: 'California', countryId: 2 },
  { stateId: 4, name: 'Texas', countryId: 2 },
  { stateId: 5, name: 'Ontario', countryId: 3 },
  { stateId: 6, name: 'Quebec', countryId: 3 },
];

const capitals = [
  { capitalId: 1, name: 'Hyderabad', stateId: 1 },
  { capitalId: 2, name: 'Mumbai', stateId: 2 },
  { capitalId: 3, name: 'Sacramento', stateId: 3 },
  { capitalId: 4, name: 'Austin', stateId: 4 },
  { capitalId: 5, name: 'Toronto', stateId: 5 },
  { capitalId: 6, name: 'Quebec City', stateId: 6 },
];

const App = () => {
  const [filteredStates, setFilteredStates] = useState(states);
  const [filteredCountries] = useState(countries);
  const [filteredCapitals, setFilteredCapitals] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Handle country change
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

  // Handle state change
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
      {/* Country Dropdown */}
       <select className="dropdown" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {filteredCountries.map((country) => (
          <option key={country.countryId} value={country.countryId}>
            {country.name}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
       <select className="dropdown" value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {filteredStates.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.name}
          </option>
        ))}
      </select>

      {/* Capital Dropdown */}
      <select className="dropdown" disabled={!selectedState}>
        <option value="">Select Capital</option>
        {filteredCapitals.map((capital) => (
          <option key={capital.capitalId} value={capital.capitalId}>
            {capital.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;


