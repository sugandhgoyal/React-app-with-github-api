import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import ArticleHome from '../containers/article/article.home';

export default(
    <Router>
        <Route path="/" component={ArticleHome}/>
    </Router>
)