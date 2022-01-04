import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

  const [entries, setEntries] = useState([{weight: 135, date: "01/04/2022"}, {weight: 137, date: "01/05/2022"}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;
