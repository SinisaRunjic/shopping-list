import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <React.Fragment>
      <AppNavBar />
      <ShoppingList/>
    </React.Fragment>
  );
}

export default App;
