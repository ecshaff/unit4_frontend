// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';


// =================
// COMPONENT
// =================
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <header>
                <h1>Blog App</h1>
            </header>
        );
    }
}

// ================
// EXPORT
// ================
export default Header;
