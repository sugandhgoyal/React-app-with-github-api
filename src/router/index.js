import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from '../containers/header/header.container';
import Loginpage from '../containers/login/login.container';
import Feed from '../containers/feed/feed.container';
import Newarticle from '../containers/article/addNewArticle.container';
import Listing from '../containers/listing/listing.container';
import Article from '../containers/article/article.container';
import Images from '../containers/image/image.container';

export default (
    <Router>
        <div>
            <Route exact path="*" component={Header} />
            <Route path="/login" component={Loginpage} />
            <Route path="/articlehome" component={Article} />
            <Route path="/feed" component={Feed} />
            <Route path="/addarticle" component={Newarticle} />
            <Route path="/listing" component={Listing} />
            <Route path="/imageupload" component={Images} />
        </div>

    </Router>
)