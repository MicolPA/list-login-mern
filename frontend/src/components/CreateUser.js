import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

const URI = process.env.API_URI ? process.env.API_URI : 'http://localhost:4000/api';

export default class CreateUser extends Component {
    state = {
        users: [],
        username: '',
        first_name: '',
        last_name: '',
        password: ''
    }

    //Get data from server
    async componentDidMount(){
        this.getUsers();
    }

    cleanState(){
        this.setState({
            username: '',
            first_name: '',
            last_name: '',
            password: ''
        })
    }

    async getUsers(){
        const res = await axios.get(URI + '/user');
        this.setState({users: res.data});
        console.log(this.state.users);
    }

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
        console.log(this.state);
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const user = await axios.post(URI + '/user', {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.password,
        });
        swal('Success', 'User created successfully', 'success');
        this.cleanState();
        this.getUsers();
        console.log(user);
    }

    deleteUser = async (id) => {
        await axios.delete(URI + '/user/'+id);
        this.getUsers();
    }

    render() {
        return (
            <div className=''>
               <div className='row mt-5'>
                    <div className="col-md-12">
                        <h4>Create user</h4>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label className='text-dark font-weight-bold'>First Name</label>
                                    <input name='first_name' type="text" className="form-control" onChange={this.handleChange} value={this.state.first_name} />
                                </div>
                                <div className="form-group">
                                    <label className='text-dark font-weight-bold'>Last Name</label>
                                    <input name='last_name' type="text" className="form-control" onChange={this.handleChange} value={this.state.last_name} />
                                </div>
                                <div className="form-group">
                                    <label className='text-dark font-weight-bold'>Username</label>
                                    <input name='username' type="text" className="form-control" onChange={this.handleChange} value={this.state.username} />
                                </div>
                                <div className="form-group">
                                    <label className='text-dark font-weight-bold'>Password</label>
                                    <input name='password' type="text" className="form-control" onChange={this.handleChange} value={this.state.password} />
                                </div>
                                
                                <div className="form-group">
                                    <input className='btn btn-success btn-block' type="submit" value="Create"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray text-dark pb-2 mb-0">Users Created</h6>
                        {
                           this.state.users.map(user => (
                            <div className='media text-muted pt-3' key={user._id}>
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark">@{user.username}</strong>
                                        <Link className='text-danger font-weight-bold' to='#' onClick={() => this.deleteUser(user._id)}>Delete</Link>
                                    </div>
                                    <span className="d-block">{user.first_name + ' ' + user.last_name}</span>
                                </div>
                            </div>
                           ))
                       }
                        
                    </div>
                   </div>
                </div>   
            </div>
        )
    }
}
