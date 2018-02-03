import React from 'react';
import Table from '../../components/table';
import { connect } from 'react-redux';

class ArticleHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            displayItems: [],
        };
    }

    render() {
        return (
            <div className={this.props.headerReducer.header_data ? "mainMove" : "main"}>
            <h3>Articles</h3>
                <Table products={this.props.data} />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(ArticleHome);