import React, { Component, Fragment } from 'react';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <label for="collapse" class="btn__collapse">
                        <i class="fa fa-bars"></i>
                    </label>
                    <input type="checkbox" id="collapse" style={{ display: 'none' }} class="inp__collapse" />
                    <div class="nav__bg"></div>
                    <a className="nav__brand">
                        <img src="./static/logo.png" />
                    </a>
                    <div className="nav__main">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Igredients</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Menu</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Reviews</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Reservations</a>
                            </li>
                        </ul>

                        <div className="nav__social">
                            <a href="#" className="nav__twitter"> <i class="fa fa-twitter"></i></a>
                            <a href="#" className="nav__youtube"> <i class="fa fa-youtube"></i></a>
                            <a href="#" className="nav__facebook"><i class="fa fa-facebook-f"></i></a>
                        </div>
                    </div>

                </header>
            </Fragment>
        );
    }
}

export default Header;