import React from 'react';

class Displaydate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="displayDate">Scheduled for : {this.props.publishedDate.toString()}&nbsp;</div>);
    }
}

export default Displaydate;