import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import '../styles/app.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<Properties />} />
        <Route path='/add-property' element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
