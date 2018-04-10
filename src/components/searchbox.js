import React from 'react';
import '../assets/css/searchBox.css';
import { connect } from 'react-redux';
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
        if (e.keyCode === 13) {
            this.handleChange(e, true);
        }
        this.handleChange(e, false);
    }
    handleChange(e, isEnter) {
        if (!isEnter) {
            this.setState({
                searchString: e.target.value
            });
        } else {
            let searchedString = this.state.searchString;
            //call async action for search
        }
    }

    render() {
        return (
            <div>gejek</div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Searchbox);