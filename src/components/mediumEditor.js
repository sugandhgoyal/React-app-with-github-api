import React from 'react';
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
class Mediumeditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text:"dlkdknd"
    }
  }
  componentWillMount(){
    this.setState({
      text: 'Fusce dapibus, tellus ac cursus commodo'
    })
  }
 
  handleChange = (text, medium) => {
    this.setState({text: text});
  }
  render() {
    return (
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
    );
  }
 
}

export default Mediumeditor;
