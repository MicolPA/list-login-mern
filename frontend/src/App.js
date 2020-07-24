import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/cover.css';
import './App.css';

//Components
import Nav from './components/Nav';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList'; 

function App() {
  return (
    <Router>
      <Nav/>
      <div className="container">
        <Route  path="/" exact component={NoteList} />
        <Route  path="/user/create" exact component={CreateUser} />
        <Route  path="/user/edit/:id" exact component={CreateUser} />
        <Route  path="/note/edit/:id" exact component={CreateNote} />
        <Route  path="/note/create" exact component={CreateNote} />
      </div>
    </Router>
    
  );
}

export default App;
