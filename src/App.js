import React from 'react';
import './App.css';
import Search from './component/Search';

import data from './data/mock_data.json';


function App() {
  return (
    <div>

   <Search data = {data}/>
   
    </div>
  );
}

export default App;
