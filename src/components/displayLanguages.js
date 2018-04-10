import React from 'react';
import {connect} from 'react-redux';
import {getLanguagesApi} from '../action/index.js';

class Displaylang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: {}
    }
  }
  componentWillMount = () => {
    this.props.dispatch(getLanguagesApi(this.props.langUrl));
  }
  render() {
        return (
          <div id="displayLang">
             &nbsp;&nbsp;{Object.keys(this.props.repoReducer.languages).map((ele,index) => <div key={index}>{ele}</div>)}
          </div>
        )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Displaylang);
