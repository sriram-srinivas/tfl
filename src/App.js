import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.get('http://localhost:4000/preLoadLogin').then(
            response => {
                console.log(response);
        });
class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
