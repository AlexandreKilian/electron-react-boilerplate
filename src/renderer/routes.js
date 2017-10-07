import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
export default () =>
    (
        <Route pathname="/" component={App}>
        </Route>
    );