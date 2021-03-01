import './App.css';
import Home from './components/Home';
import MeetDevs from './components/MeetDevs'
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';

import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={MeetDevs} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />

    </div>
  );
}

export default App;