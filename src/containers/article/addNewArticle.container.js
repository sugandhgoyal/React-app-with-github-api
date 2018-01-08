import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadArticleDataApi
} from "../../action/index";
import Navigationbar from '../../components/navbar';
import Searchbox from '../../components/searchbox';
import Table from '../../components/table';
import Addarticleform from '../../components/articleForm';

class Newarticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_items: [],
            moveaside: false,
        }
        this.openNav = this.openNav.bind(this);
    }
    openNav() {
        const currentState = this.state.moveaside;
        this.setState({ moveaside: !currentState });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            article_items: nextProps.articleReducer.article_data
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.moveaside ? "mainMove" : "main"} id="mainId">
                    <span className="openButton" onClick={this.openNav}>&#9776; </span>
                    <Searchbox />
                    <i className="fa fa-user-circle-o user" aria-hidden="true"></i>
                </div>
                <div className={this.state.moveaside ? "mainMove" : "main"}>
                    <Addarticleform />
                </div>
                <Navigationbar moveasideProp={this.state.moveaside} />
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