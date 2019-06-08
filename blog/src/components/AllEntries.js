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
            { this.props.entries.map((entry, index) => {
                return (
                    <Entry
                    key={index}
                    entry={entry}
                    />
                )
            })}
            </div>
        );
    }
}

// ================
// EXPORT
// ================
export default AllEntries;
