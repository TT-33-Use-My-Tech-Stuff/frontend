import './App.css';
import Home from './components/Home';
import MeetDevs from './components/MeetDevs'
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import TechList from './components/TechList';

import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';



function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={MeetDevs} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/dash' component={Dashboard} />
      <Route path='/rentals' component={TechList} />

    </div>
  );
}

export default App;