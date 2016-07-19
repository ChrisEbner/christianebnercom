import React, {Component} from 'react';

import Header from './Header';
import SocialItems from './SocialItems'

var AppStyles = require('./App.css')

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SocialItems />
            </div>
        );
    }
}