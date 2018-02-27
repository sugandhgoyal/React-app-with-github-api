import React from 'react';
import '../assets/css/searchBox.css';
import { connect } from 'react-redux';
import { searchArticleDataApi } from '../action/index';
import { FormControl } from 'react-bootstrap';

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
        return (
            <div className="col-sm-10">
            <FormControl value={this.state.searchString} type="text" placeholder="Search So City"
             onChange={this.handleChange} onKeyDown={this.search} />
              <i className="fa fa-search" aria-hidden="true" id="searchIcon"></i>
            <i className="fa fa-times" aria-hidden="true" id="cancelButton" onClick={this.clearInput}></i>
          </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Searchbox);