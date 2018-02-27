import React from 'react';
import '../assets/css/articleForm.css';

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
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown">Interest</button>
                    <div className="dropdown-menu">
                        {interests.map((interest, index) => <div className="categories">
                            <input key={index} type="checkbox" className="city btn btn-default"/>{interest}
                        </div>)}
                        <div/>
                    </div>
                </div>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown">City</button>
                    <div className="dropdown-menu">
                        {cities.map((city, index) => <div className="categories">
                            <button key={index} className="city btn btn-default">{city}</button>
                        </div>)}
                        <div/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Multidropdown;