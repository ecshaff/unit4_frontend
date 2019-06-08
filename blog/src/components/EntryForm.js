// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';


// =================
// COMPONENT
// =================
class EntryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Create New Entry</legend>
                </fieldset>
            </form>
        );
    }
}

// ================
// EXPORT
// ================
export default EntryForm;
