import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import NoMatch from './Components/NoMatch/NoMatch';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import DestinationDetails from './Components/DestinationDetails/DestinationDetails';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/updateProfile" exact component={UpdateProfile} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/destination/:riderSelect" exact component={Destination} />
          <PrivateRoute path="/destination" exact component={Destination} />
          <PrivateRoute Route path="/destinationDetails" exact component={DestinationDetails} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="*" exact component={NoMatch} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
