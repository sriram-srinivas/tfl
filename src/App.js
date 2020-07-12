import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Worksheets from './containers/Worksheets/Worksheets';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
            <Worksheets/>
        </Layout>
      </div>
    );
  }
}

export default App;
