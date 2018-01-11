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
        return (<input className="searchInput" type="text" placeholder="Search..." />)
    }
}

export default Searchbox;