import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Particles from 'react-particles-js';
import Loginform from './loginform.container';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: [],
        };
    }
   
    render() {
        return (
            <div className={this.state.moveaside ? "mainMove" : "main loginBackground"}>
                <Particles className="particles" params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        "line_linked": {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.6,
                            width: 1
                        },
                        "opacity": {
                            value: 1.5,
                        },
                        "move": {
                            "speed": 10
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            polygon: {
                                nb_sides: 7
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0.1
                                }
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            }
                        }
                    },
                    "retina_detect": true
                }}
                />
                <Loginform facebook={this.facebook} google={this.google} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Login);