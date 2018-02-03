import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadArticleDataApi
} from "../../action/index";
import ArticleHome from './articlehome.container';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.props.dispatch(loadArticleDataApi(0));
    }
    render() {
        return (
            <ArticleHome data={this.props.articleReducer.article_data} />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}


export default connect(state => state, mapDispatchToProps)(Article);