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
        this.state = {
            currentView: 'all'
        }
        // method binding
        this.handleView = this.handleView.bind(this);
    }

    // method to change views
    handleView(view) {
        this.setState( { currentView: view } )
    }
    render() {
        return (
          <div className="App">
            <Header
            currentView={this.state.currentView}
            handleView={this.handleView}
            />
            <EntryForm />
            <AllEntries currentView={this.state.currentView} />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
