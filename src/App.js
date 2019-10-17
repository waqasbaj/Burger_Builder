import React, { Component } from 'react';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
