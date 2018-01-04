import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


// import Addarticle from '../components/addNewArticle';
import Article from '../containers/article/article.container';

export default (
    <Router>
        <div>
            <Route path="/" component={Article} />
            {/* <Route exact path="/addarticle" component={Addarticle} /> */}
        </div>

    </Router>
)