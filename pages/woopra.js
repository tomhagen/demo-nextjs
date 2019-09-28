import React, { Component, Fragment } from 'react';
import WoopraHeader from '../layout/header';
import HomePage from '../layout/home';
import Cusomers from '../layout/customers';

class Woopra extends Component {
    render() {
        return (
            <Fragment>
                <WoopraHeader/>
                <HomePage/>
                <Cusomers/>
            </Fragment>
        );
    }
}

export default Woopra;