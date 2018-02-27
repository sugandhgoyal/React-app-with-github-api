import React from 'react';

class Previewpage extends React.Component {
    render() {
        console.log("pre",this.props);
        return (
            <div>hereeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
            // <div className='fr-view' dangerouslySetInnerHTML={this.props.getTrustedHtml()}></div>
        )
    }
}

export default Previewpage;