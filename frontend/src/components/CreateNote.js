import React, { Component } from 'react';
import axios from 'axios';

const URI = 'http://localhost:4000/api';

export default class CreateNote extends Component {

    state = {
        notes: []
    }

    async componentDidMount(){
        console.log('here');
        this.getNotes();
    }

    getNotes =  async() => {
        const notes = await axios.get(URI + '/notes');
        this.setState({notes:notes.data});
        console.log(this.state.notes);

    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note =>(
                        <div className="col-md-2" key={note._id}>
                            {note.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}
