import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{ weight: 135, date: "01-04-2022" }, { weight: 137, date: "01-05-2022" }])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry} />
    </div>
  );
}

export default App;
