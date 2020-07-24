import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const URI = process.env.API_URI ? process.env.API_URI : 'http://localhost:4000/api';

export default class NoteList extends Component {

    state = {
        notes: []
    }

    async componentDidMount(){
        console.log('here');
        this.getNotes();
    }

    async getNotes(){
        const res = await axios.get(URI + '/notes');
        this.setState({notes:res.data});
        console.log(res.data);
    }

    getUser = async (id) => {
        const user = await axios.get('/user'+id);
        console.log(user);
    }   

    render() {
        return (
            <div className="row mt-5 pt-5">
                {
                    this.state.notes.map(note =>(
                        <div className="col-md-3" key={note._id}>
                            
                            <div className="card">
                                <div className="card-2 h-6 bg-light pl-4 pr-4 pt-2 pb-2">
                                    <span className='text-secondary font-weight-bold'>Task</span>
                                    <span className='text-secondary font-weight-bold float-right'>
                                        <Link className='text-success mr-2'><FontAwesomeIcon icon={faCheckCircle} /></Link>
                                        <Link className='text-danger'><FontAwesomeIcon icon={faTimesCircle} /></Link>
                                    </span>
                                </div>
                                <div className="p-4">
                                    <p className='text-dark'>{note.title}</p>
                                    <p className='text-dark'>{note.description}</p>

                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className='light-circle'></div>
                                        </div>
                                        <div className="col-md-5">
                                            {/* <small className='text-dark '>{note.title}</small> */}
                                        </div>
                                        <div className="col-md-5">
                                            <small className='text-dark text-right'>{note.date_limit}</small>
                                        </div>
                                        {/* {user = this.getUser(note.user_id)} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
