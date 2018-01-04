import React from 'react';
import '../App.css';
import Example from './example';

class Addarticle extends React.Component {
    render() {
        return (
            <div className="form">
                <form >
                    Title:<input type="text" name="firstname" />
                    Id:<input type="text" name="lastname" />
                    Meta Title<input type="text" name="lastname" />
                    Meta Description<input type="text" name="lastname" />
                    Meta Keywords<input type="text" name="lastname" />
                    Meta Image<input type="text" name="lastname" />
                    <button type="submit" >Add card</button>
                    Image Url<input type="text" name="lastname" />
                    <input type="checkbox" name="vehicle" value="Car" checked />Does this article have any links?
            </form>
                <Example />
            </div>

        )
    }
}

export default Addarticle;