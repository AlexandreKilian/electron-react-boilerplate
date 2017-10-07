import React from 'react';
import { text } from './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p className={text}>Welcome to the electron-webpack, react, redux boilerplate!</p>
            </div>
        );
    }
}
