

function States(filteredStates) {
  return (
    <>
    {filteredStates.filteredStates?.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.name}
          </option>
        ))}
    </>
  )
}

export default States