import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
