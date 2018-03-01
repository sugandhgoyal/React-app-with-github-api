import React from 'react';
import '../assets/css/addCardDisplay.css';
import image from '../images/agra.png';

class Addcarddisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            descriptionState:'yoooooooooooo'
        }
    }
    render() {
        if(this.props.newCardDataJson.length > 0){
        return (
            <div className="eachCard">
            {this.props.newCardDataJson.map((ele,index) =>{
             return(
             <div key={index}>
                <i className="fa fa-times"></i>
                <div>{ele.cardTitle}</div>
                <div>{ele.cardSubtitle}</div>
                <img src={image} />
                <div dangerouslySetInnerHTML={ {__html:ele.cardDescription} }></div>
                <div>{ele.cardAssociatedListing}</div>
                <div>{ele.cardPhoneNumber}</div>
             </div>
             )
            }
        )}
        </div>
    )
    }
    else{
        return( <div>Cards</div>)
    }
}
}

export default Addcarddisplay;