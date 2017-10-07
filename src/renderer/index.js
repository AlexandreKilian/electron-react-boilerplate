import "react-hot-loader/patch";
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import history from './routing/history';
import Root from './containers/Root';

const store = configureStore(history);
render(
    // <AppContainer>
        <Root store={store} history={history} />
    // </AppContainer>,
    ,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            // <AppContainer>
                <NewRoot store={store} history={history} />
            // </AppContainer>
            ,
            document.getElementById('app')
        );
    });
}
