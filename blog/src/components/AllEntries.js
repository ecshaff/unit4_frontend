// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Entry from './Entry'


// =================
// COMPONENT
// =================
class AllEntries extends Component {
    render() {
        return (
            <div className="all-entries">
                <Entry />
            </div>
        );
    }
}

// ================
// EXPORT
// ================
export default AllEntries;
