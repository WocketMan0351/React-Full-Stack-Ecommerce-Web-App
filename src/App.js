import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
