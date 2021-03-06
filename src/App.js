import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Login'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;