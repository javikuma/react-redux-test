import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// store REDUX
import { Provider } from 'react-redux';
import store from './store';

// Components
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import Logs from './components/logs/Logs';

import './App.css';

const  App = () => {

  useEffect(() => {
    // Init Mateialize JS
    M.AutoInit()
  })
  
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
}

export default App;
