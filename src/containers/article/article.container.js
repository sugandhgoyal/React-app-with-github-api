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
            article_items: [],
        }
    }
    componentWillMount() {
        this.props.dispatch(loadArticleDataApi(0));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            article_items: nextProps.articleReducer.article_data
        })
    }
    render() {
        console.log("article container");
        console.log(this.props);
        return (
            <ArticleHome data={this.state.article_items} />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}


export default connect(state => state, mapDispatchToProps)(Article);