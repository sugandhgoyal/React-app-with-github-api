import React from 'react';
import '../App.css';
import Datetime from 'react-datetime';

class Datetimepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: [],
            newText: new Date(),
        };
        this.updateState = this.updateState.bind(this);
        this.showValuee = this.showValuee.bind(this);
    }
    updateState(e) {
        const text = e.value;
        this.setState({ newText: text });
    }
    showValuee() {
        console.log(this.state.newText);
    }
    render() {
        return (
            <Datetime className={this.props.show ? 'rdt' : 'hide'} onChange={this.updateState} />
        )
    }
}


export default Datetimepicker;