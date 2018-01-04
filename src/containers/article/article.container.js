import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadArticleDataApi
} from "../../action/index";
import ArticleHome from '../../components/article.home';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [],
        }
    }

    componentWillMount() {
        //const num = 0;
      //  console.log("Article container", loadArticleDataApi());
        this.props.dispatch(loadArticleDataApi(0));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            article_items: nextProps.articleReducer.article_data
        })
    }
    render() {
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