import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Repositories from '../containers/repository/repo.container';

export default (
    <Router>
        <div>
            <Route exact path="/" component={Repositories} />
        </div>
    </Router>
)