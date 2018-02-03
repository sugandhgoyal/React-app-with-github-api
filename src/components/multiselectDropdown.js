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
                <div className="row row1" >
                    <span id="select1">Choose Interest</span>
                </div>
                <div className="row row2">
                    <button className="interests btn btn-default">Art & Culture</button>
                    <button className="interests btn btn-default">City Life</button>
                    <button className="interests btn btn-default">Events</button>
                    <button className="interests btn btn-default">Entertainment</button>
                    <button className="interests btn btn-default">Food & Nightlife</button>
                    <button className="interests btn btn-default">Fashion</button>
                    <button className="interests btn btn-default">Health & Beauty</button>
                    <button className="interests btn btn-default">Hobbies & Learning</button>
                    <button className="interests btn btn-default">Music</button>
                    <button className="interests btn btn-default">Nature & Heritage</button>
                    <button className="interests btn btn-default">People & Communities</button>
                    <button className="interests btn btn-default">Shopping</button>
                    <button className="interests btn btn-default">Student Life</button>
                    <button className="interests btn btn-default">Sports</button>
                    <button className="interests btn btn-default">Travel</button>
                </div>
                <div className="row row1">
                    <span id="select2">Choose City</span>
                </div>
                <div className="row row2">
                    <button className="city btn btn-default">Andaman</button>
                    <button className="city btn btn-default">Amritsar</button>
                    <button className="city btn btn-default">Agra</button>
                    <button className="city btn btn-default">Coorg</button>
                    <button className="city btn btn-default">Delhi</button>
                    <button className="city btn btn-default">Darjeeling</button>
                    <button className="city btn btn-default">Jaisalmer</button>
                    <button className="city btn btn-default">Kasol</button>
                    <button className="city btn btn-default">Leh Ladakh</button>
                    <button className="city btn btn-default">Mussoorie</button>
                    <button className="city btn btn-default">Mcleodganj & Dharamshala</button>
                    <button className="city btn btn-default">Nasik</button>
                    <button className="city btn btn-default">Nainital</button>
                    <button className="city btn btn-default">Ooty</button>
                    <button className="city btn btn-default">Pondicherry</button>
                    <button className="city btn btn-default">Rishikesh</button>
                    <button className="city btn btn-default">SriNagar</button>
                    <button className="city btn btn-default">Shimla</button>
                    <button className="city btn btn-default">Shillong</button>
                    <button className="city btn btn-default">Udaipur</button>
                    <button className="city btn btn-default">Varanasi</button>
                </div>
            </div >
        )
    }
}

export default Multidropdown;