import React from 'react';
import '../App.css';

class Multidropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myFunction = this.myFunction.bind(this);
    }
    myFunction() {
        console.log("multi select");
    }
    render() {
        return (
            <div>
                <div className="multiDropdown">
                    <button onClick={this.state.myFunction} className="multibtn">Choose Interest</button>
                    <div id="multiDrop" className="multi-content">
                        <input type="checkbox" />Art & Culture<br />
                        <input type="checkbox" />City Life<br />
                        <input type="checkbox" />Events<br />
                        <input type="checkbox" />Entertainment<br />
                        <input type="checkbox" />Food & Nightlife<br />
                        <input type="checkbox" />Fashion<br />
                        <input type="checkbox" />Health & Beauty<br />
                        <input type="checkbox" />Hobbies & Learning<br />
                        <input type="checkbox" />Music<br />
                        <input type="checkbox" />Nature & Heritage<br />
                        <input type="checkbox" />People & Communities<br />
                        <input type="checkbox" />Shopping<br />
                        <input type="checkbox" />Student Life<br />
                        <input type="checkbox" />Sports<br />
                        <input type="checkbox" />Travel<br />
                    </div>
                </div>
                <div className="multiDropdown">
                    <button onClick={this.state.myFunction} className="multibtn">Choose City</button>
                    <div id="multiDrop" className="multi-content">
                        <input type="checkbox" />Andaman<br />
                        <input type="checkbox" />Amritsar<br />
                        <input type="checkbox" />Agra<br />
                        <input type="checkbox" />Coorg<br />
                        <input type="checkbox" />Delhi<br />
                        <input type="checkbox" />Darjeeling<br />
                        <input type="checkbox" />Jaisalmer<br />
                        <input type="checkbox" />Kasol<br />
                        <input type="checkbox" />Leh Ladakh<br />
                        <input type="checkbox" />Mussoorie<br />
                        <input type="checkbox" />Mcleodganj & Dharamshala<br />
                        <input type="checkbox" />Nasik<br />
                        <input type="checkbox" />Nainital<br />
                        <input type="checkbox" />Ooty<br />
                        <input type="checkbox" />Pondicherry<br />
                        <input type="checkbox" />Rishikesh<br />
                        <input type="checkbox" />SriNagar<br />
                        <input type="checkbox" />Shimla<br />
                        <input type="checkbox" />Shillong<br />
                        <input type="checkbox" />Udaipur<br />
                        <input type="checkbox" />Varanasi<br />
                    </div>
                </div>
            </div >
        )
    }
}

export default Multidropdown;