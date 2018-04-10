import React from 'react';
import {connect} from 'react-redux';
import {getStarsApi} from '../action/index.js';

class Displaystars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: {}
    }
  }
  componentWillMount = () => {
    this.props.dispatch(getStarsApi(this.props.username,this.props.reponame));
  }
 
  render() {
        return (
          <div id="displayStars">
            &nbsp;&nbsp;{this.props.repoReducer.stars}
          </div>
        )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Displaystars);
