import React from 'react';
import '../assets/css/feedCard.css';

class Multidropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myFunction = this
            .myFunction
            .bind(this);
    }
    myFunction() {
        console.log("multi select");
    }
    render() {
        const cities = [
            "Andaman",
            "Amritsar",
            "Agra",
            "Coorg",
            "Delhi",
            "Darjeeling",
            "Jaisalmer",
            "Kasol",
            "Leh Ladakh",
            "Mussoorie",
            "Mcleodganj & Dharamshala",
            "Nasik",
            "Nainital",
            "Ooty",
            "Pondicherry",
            "Rishikesh",
            "Srinagar",
            "shimla",
            "Shillong",
            "Udaipur",
            "Varanasi"
        ];
        const interests = [
            "Art & Culture",
            "City Life",
            "Events",
            "Entertainment",
            "Food & Nightlife",
            "Fashion",
            "Health & Beauty",
            "Hobbies & Learning",
            "Music",
            "Nature & Heritage",
            "People & Communities",
            "Shopping",
            "Student Life",
            "Sports",
            "Travel"
        ];
        return (
            <div>
                <div className="row row1">
                    <span id="select1">Choose Interest</span>
                </div>
                <div className="row row2">
                {interests.map((interest) => <button type="checkbox" className="city btn btn-default">{interest}</button>)}
                </div>
                <div className="row row1">
                    <span id="select2">Choose City</span>
                </div>
                <div className="row row2">
                    {cities.map((city) => <button className = "city btn btn-default">{city}</button>)}
                </div>
            </div>
        )
    }
}
export default Multidropdown;
