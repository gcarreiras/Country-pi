import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import Card from './components/Card/Card'


function App() {
  return (
    <BrowserRouter>
      <div className='appDiv'>
        <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path= '/home' component={Home}/>
        <Route path = '/card/:id' component={Card}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
