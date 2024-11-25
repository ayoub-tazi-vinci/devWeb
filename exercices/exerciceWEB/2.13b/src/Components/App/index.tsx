
import { useState } from 'react';
import Dog from '../Dog'

import './App.css'

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div >
        <Dog key={`${refresh}1`} />
        <Dog key={`${refresh}2`} />
        <Dog key={`${refresh}3`} />
      </div>

      <button
        onClick={() => setRefresh(!refresh)}>
        Refresh Dogs
      </button>
    </>
  );
};

export default App;
