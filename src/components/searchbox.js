import React from 'react';
import '../App.css';

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false,
        };
        this.search = this.search.bind(this);
    }
    search() {
        this.setState({ searching: !this.state.searching });
    }
    render() {
        if (this.state.searching === false) {
            return (
                <i className="fa fa-search search-icon" aria-hidden="true" onClick={this.search}></i>
            )
        }
        else {
            return (<input className="searchInput" type="text" placeholder="Search..." />)
        }

    }
}

export default Searchbox;