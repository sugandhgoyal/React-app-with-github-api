import React from 'react';
import './../App.css';

class SwitchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.checkedProp === 0 &&
                    < label className="switch" >
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                }
                {
                    this.props.checkedProp === 1 &&
                    < label className="switch" >
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                }
            </div>
        )
    }
}

export default SwitchButton;