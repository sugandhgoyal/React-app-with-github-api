import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { searchArticleDataApi } from '../action/index';

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    search(e) {
        console.log("search");
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            this.handleChange(e, true);
        }
        this.handleChange(e, false);
    }
    handleChange(e, isEnter) {
        console.log("handlechange");
        console.log(isEnter);
        if (!isEnter) {
            this.setState({
                searchString: e.target.value
            });
        } else {
            let searchedString = this.state.searchString;
            this.props.dispatch(searchArticleDataApi(searchedString));
        }
    }

    render() {
        return (<input className="col-sm-10 searchInput" value={this.state.searchString} type="text" placeholder="Search Items"
            onChange={this.handleChange} onKeyDown={this.search} />)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Searchbox);