import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Feed from '../containers/feed/feed.container';
import Newarticle from '../containers/article/addNewArticle.container';
import Multidropdown from '../components/multiselectDropdown';


// import Addarticle from '../components/addNewArticle';
import Article from '../containers/article/article.container';

export default (
    <Router>
        <div>
            <Route exact path="/" component={Article} />
            <Route path="/feed" component={Feed} />
            <Route path="/addarticle" component={Newarticle} />
            <Route path="/aa" component={Multidropdown} />
        </div>

    </Router>
)