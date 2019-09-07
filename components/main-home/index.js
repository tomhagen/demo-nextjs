import React, { Component, Fragment } from 'react';
import './index.scss';
import Link from 'next/link';
import Header from '../header';

class MainHome extends Component {
    render() {
        return (
            <Fragment>
                <section className="main-home">
                    <Header/>
                    <div className="main-home-wrapper">
                        <div className="wrapper__title">
                            the right ingredients for the right food
                        </div>
                        <div className="wrapper__icon">
                            <img src="./static/bg-icon.png" />
                        </div>
                        <div className="wrapper__btn">
                            <button type="button" className="btn btn-primary btn--black">BOOK A TABLE</button>
                            <button type="button" className="btn btn-secondary btn--white">SEE THE MENU</button>
                        </div>
                    </div>
                </section>
               

            </Fragment>
        );
    }
}

export default MainHome;