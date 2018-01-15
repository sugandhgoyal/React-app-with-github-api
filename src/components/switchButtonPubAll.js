import React from 'react';
import './../App.css';

class SwitchButtonPubAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            number: nextProps.checkedProp
        })

    }
    render() {
        return (
            <div>
                {
                    this.props.checkedProp === false &&
                    < label className="switch" >
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                }
                {
                    this.props.checkedProp === true &&
                    < label className="switch" >
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                }
            </div>
        )
    }
}

export default SwitchButtonPubAll;