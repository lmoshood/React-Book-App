import React, { Component } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import Search from './components/pages/Search';

class BooksApp extends Component {

    render() {

        return (
            <div>
        
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/search' component={Search} />
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default BooksApp;
