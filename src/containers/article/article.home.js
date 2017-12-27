import React, { Component } from 'react';
import {
    connect
} from 'react-redux';

class ArticleHome extends Component {
    render() {
        return (
            <div>Article page</div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(ArticleHome);