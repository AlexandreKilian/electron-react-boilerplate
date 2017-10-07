import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';


import '../styles/global.scss';
import Home from '../components/Home';

class App extends Component {
    render() {
        const { history } = this.props;
        return (
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Home} />
                    </div>
                </ConnectedRouter>
        );
    }
}


App.propTypes = {
    history: PropTypes.any.isRequired
};

export default App;
