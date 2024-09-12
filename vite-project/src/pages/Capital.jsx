

function Capital(filteredCapitals) {
  return (
    <>
      {filteredCapitals.filteredCapitals?.map((capital) => (
          <option key={capital.capitalId} value={capital.capitalId}>
            {capital.name}
          </option>
        ))}
    </>
  )
}

export default Capital