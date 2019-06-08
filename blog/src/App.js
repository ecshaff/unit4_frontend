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
            currentView: 'all',
            entries: []
        }
        // method binding
        this.handleView = this.handleView.bind(this);
        this.fetchEntries = this.fetchEntries.bind(this);
        this.setEntries = this.setEntries.bind(this);
    }

    // method to change views
    handleView(view) {
        this.setState( { currentView: view } )
    }

    // method to retreive data from API on load
    componentDidMount() {

    }

    // API call
    fetchEntries() {
        // fetch()
        // .then(data => data.json())
        // .then(jData => {
        //     console.log(jData)
        //     this.setEntries(jdata)
        // })
    }

    // method to set state
    setEntries(entries) {
        this.setState({
            entries: entries
        })
    }

    render() {
        return (
          <div className="App">
            <Header
            currentView={this.state.currentView}
            handleView={this.handleView}
            />
            <EntryForm />
            <AllEntries
            currentView={this.state.currentView}
            entries={this.state.entries}
            />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;