
import React, { Component } from "react";
import InputMoment from 'input-moment';
import moment from 'moment';
//import DateTimeField from "react-bootstrap-datetimepicker";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "1990-06-05",
            format: "YYYY-MM-DD",
            inputFormat: "DD/MM/YYYY",
            mode: "date"
        };
    }

    handleChange = (newDate) => {
        console.log("newDate", newDate);
        return this.setState({ date: newDate });
    }

    render() {
        const { date, format, mode, inputFormat } = this.state;
        return (
            <InputMoment
                moment={this.state.moment}
                onChange={this.handleChange}
                onSave={this.handleSave}
                minStep={1} // default
                hourStep={1} // default
                prevMonthIcon="ion-ios-arrow-left" // default
                nextMonthIcon="ion-ios-arrow-right" // default
            />
        );
    }
}

export default ParentComponent;