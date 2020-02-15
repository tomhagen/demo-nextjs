import React, { Component, Fragment } from 'react';
import WoopraHeader from '../layout/header';
import HomePage from '../layout/home';
import Cusomers from '../layout/customers';
import About from '../layout/about';
import Video from '../layout/video';

class Woopra extends Component {
    render() {
        return (
            <Fragment>
                <WoopraHeader/>
                <HomePage/>
                <Cusomers/>
                <About/>
                <Video/>
            </Fragment>
        );
    }
}

export default Woopra;