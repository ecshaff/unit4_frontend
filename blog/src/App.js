// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Header from './components/Header';

// =================
// COMPONENT
// =================
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
          <div className="App">
            <Header />


          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
