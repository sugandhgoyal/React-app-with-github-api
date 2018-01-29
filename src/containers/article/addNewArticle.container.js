import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Addarticleform from '../../components/articleForm';

class Newarticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [],
            moveaside: false,
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            article_items: nextProps.articleReducer.article_data
        })
    }
    render() {
        return (
            <div className={this.state.moveaside ? "mainMove" : "main"}>
                <h2>Add new article</h2>
                <Addarticleform />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}


export default connect(state => state, mapDispatchToProps)(Newarticle);