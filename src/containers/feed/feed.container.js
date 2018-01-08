import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadArticleDataApi
} from "../../action/index";
import Navigation from '../../components/separateNavbar';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [],
        }
    }

    // componentWillMount() {
    //   //  this.props.dispatch(loadArticleDataApi(0));
    //  }
    render() {
        return (
       <Navigation />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Feed);