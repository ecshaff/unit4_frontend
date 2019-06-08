// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import AllEntries from './components/AllEntries';

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
            <EntryForm />
            <AllEntries />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
