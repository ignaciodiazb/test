import React from 'react';
import SismosInfo from './components/SismosInfo';
import useFetch from './utils/useFetch';
import './App.css';

function App() {
  const { data, loading } = useFetch(
    'https://api.gael.cloud/general/public/sismos'
  );

  return (
    <div className="App">
      <h1>Sismos recientes</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <SismosInfo data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
