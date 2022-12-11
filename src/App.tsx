import React from 'react';
import './App.css';
import ReduxExample from './components/ReduxExample';
import { Color } from './features/color/Color';

function App() {
  return (
    <div className="App">
      {/* <ReduxExample /> */}
      <Color />

    </div>
  );
}

export default App;
