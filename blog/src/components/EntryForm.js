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
        this.state = {
            date: '',
            title: '',
            text: '',
            image: '',
            author: '',
            status: 'new'
        }
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Create New Entry</legend>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date'/>
                    <label htmlFor='author'>Author</label>
                    <input type='text' id='author'/>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title'/>
                    <label htmlFor='text'>Text</label>
                    <textarea id='text'></textarea>
                    <label htmlFor='image'>Image URL</label>
                    <input type='text' id='image'/>
                    <input type='submit' value='Post Entry'/>
                </fieldset>
            </form>
        );
    }
}

// ================
// EXPORT
// ================
export default EntryForm;
