

function Countries(filteredCountries) {
  return (
    <>
        {filteredCountries.filteredCountries?.map((country) => (
          <option key={country.countryId} value={country.countryId}>
            {country.name}
          </option>
        ))
        } 
    </>
  )
}

export default Countries