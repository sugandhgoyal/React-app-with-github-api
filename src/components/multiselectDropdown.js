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
                    <button className="btn btn-default">Art & Culture</button>
                    <button className="btn btn-default">City Life</button>
                    <button className="btn btn-default">Events</button>
                    <button className="btn btn-default">Entertainment</button>
                    <button className="btn btn-default">Food & Nightlife</button>
                    <button className="btn btn-default">Fashion</button>
                    <button className="btn btn-default">Health & Beauty</button>
                    <button className="btn btn-default">Hobbies & Learning</button>
                    <button className="btn btn-default">Music</button>
                    <button className="btn btn-default">Nature & Heritage</button>
                    <button className="btn btn-default">People & Communities</button>
                    <button className="btn btn-default">Shopping</button>
                    <button className="btn btn-default">Student Life</button>
                    <button className="btn btn-default">Sports</button>
                    <button className="btn btn-default">Travel</button>
                </div>
                <div className="row">
                    <span>Choose City</span>
                    <button className="btn btn-default">Andaman</button>
                    <button className="btn btn-default">Amritsar</button>
                    <button className="btn btn-default">Agra</button>
                    <button className="btn btn-default">Coorg</button>
                    <button className="btn btn-default">Delhi</button>
                    <button className="btn btn-default">Darjeeling</button>
                    <button className="btn btn-default">Jaisalmer</button>
                    <button className="btn btn-default">Kasol</button>
                    <button className="btn btn-default">Leh Ladakh</button>
                    <button className="btn btn-default">Mussoorie</button>
                    <button className="btn btn-default">Mcleodganj & Dharamshala</button>
                    <button className="btn btn-default">Nasik</button>
                    <button className="btn btn-default">Nainital</button>
                    <button className="btn btn-default">Ooty</button>
                    <button className="btn btn-default">Pondicherry</button>
                    <button className="btn btn-default">Rishikesh</button>
                    <button className="btn btn-default">SriNagar</button>
                    <button className="btn btn-default">Shimla</button>
                    <button className="btn btn-default">Shillong</button>
                    <button className="btn btn-default">Udaipur</button>
                    <button className="btn btn-default">Varanasi</button>
                </div>
            </div >
        )
    }
}

export default Multidropdown;