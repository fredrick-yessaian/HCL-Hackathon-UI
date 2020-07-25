import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductsCategory from './components/LoginForm';
import Customer from './components/customer';
import Staff from './components/staff'

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-50">
      <div className='navbar-brand'>
          <h4>Food Portal</h4>
        </div>
      </nav>
      <Switch>
					<Route path="/" name="Home" component={ProductsCategory} />
          <Route path="/customer" name="Customer" component={Customer} />
          <Route path="/staff" name="Staff" component={Staff} />
				</Switch>
    </div>
  );
}

export default App;

