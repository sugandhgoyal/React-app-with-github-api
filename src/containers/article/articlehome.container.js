import React from 'react';
import Table from '../../components/table';
import { connect } from 'react-redux';

class ArticleHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
        };
    }

    render() {
        return (
            <div className={this.state.moveaside ? "mainMove" : "main"}>
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