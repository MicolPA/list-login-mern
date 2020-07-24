import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className='text-center'><Link className="masthead-brand" to ='/'>Rudok Notes</Link></h3>
                    <nav className="nav nav-masthead justify-content-center">
                    <Link className="nav-link active text-white" to="/">Home</Link>
                    <Link className="nav-link text-white" to="/note/create">Create Note</Link>
                    <Link className="nav-link" to="/user/create" id='user-link'>User</Link>
                    </nav>
                </div>
                </header>
            </div>
               
        )
    }
}
