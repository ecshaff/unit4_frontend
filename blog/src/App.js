// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Header from './components/Header';
import Entry_Form from './components/Entry_Form';

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
            <Entry_Form />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
