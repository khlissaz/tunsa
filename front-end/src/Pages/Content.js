import React from 'react';

import {
    Route,
    Routes,
    Redirect
} from 'react-router-dom';
import Home from './Home';

function Pages() {

    return (

        <Routes>
            <Route path='/' exact component={Home} />
        </Routes>

    );
}

export default Pages;