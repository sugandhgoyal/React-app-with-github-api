import React from 'react';
import '../App.css';
import Datetime from 'react-datetime';

class Datetimepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: ''
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(date) {
        // This function gives you the moment object of date selected. 
        this.props.getDate(date._d);
    }
    render() {
        return (
            <Datetime className={this.props.show ? 'rdt' : 'hide'} onBlur={this.updateState} />
        );
    }
}

export default Datetimepicker;