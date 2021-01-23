import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="dark">
                    <div className="row content">
                        <div className="column col-4">
                            <h6>App Name</h6>
                            <img src="logo.jpg" width="100" alt="Logo Container"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="column col-4 center">
                            <h6>News Letter Signup</h6>
                            <form>
                                <input type="email" placeholder="E-mail" /><br />
                                <button className="blue">Sign Up</button>
                            </form>
                        </div>
                        <div className="column col-4 center">
                            <h6>Contact Us</h6>
                            <form>
                                <input type="text" placeholder="Name" /><br />
                                <input type="email" placeholder="E-mail" /><br />
                                <input type="text" placeholder="Comment" rows="5" /><br />
                                <button className="blue">Submit</button>
                            </form>
                        </div>
                        <div className="column col-4">
                            <h6>Address</h6>
                            <p>Guardian Ride Development<br />
                            10880 Malibu Point,<br />
                            Florida
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dark">
                    <div className="row content">
                    <div className="column col-1 center" >
                        <p>Designed & Developed by Eman Curmi &copy;
                        Copyright 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}