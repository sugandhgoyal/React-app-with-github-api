import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/articleForm.css';
import {loadArticleDataApi} from "../../action/index";
import Table from '../../components/table';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            displayItems: [],
            articles: [],
            hasMoreItems: true
        }
    }
    componentWillMount() {
        if (this.props.userReducer.isLoggedIn === true) {
            this.props.dispatch(loadArticleDataApi(0, 'firstLoad'));
        } 
        else {
            console.log('Not logged in!');
            this.props.history.push({pathname: '/login'})
        }
    }
    render() {
        return (
            <div className={this.props.headerReducer.header_data ? "mainMove" : "main"}>
            <h3>Articles</h3>
                <Table />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Article);