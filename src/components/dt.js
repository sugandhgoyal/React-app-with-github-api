import Datetime from 'react-datetime';
import React from 'react';

class Appp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: ''
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(date) {
        // This function gives you the moment object of date selected. 
        console.log(date._d);
    }
    render() {
        return (
            <Datetime onBlur={this.updateState} />
        );
    }
}

export default Appp;