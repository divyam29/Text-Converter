// This is Link custom component
// all component names must satrt with capital letter

// using rfc we import react functional component
// WE need to do this in each and every component that we make

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// impt is used to import proptypes

// const myStyleSheet = {
//     backgroundColor: '#e3f2fd',
// };



export default function Navbar(props) {
    // Props is used to pass values to Link component
    const [myStyleSheet, setMyStyleSheet] = useState({
        backgroundColor: '#e3f2fd',
    });

    const handleChangeColor = () => {
        console.log(document.getElementById('ColorInput').value);
        setMyStyleSheet({
            backgroundColor: document.getElementById('ColorInput').value
        });
    };
    return (
        <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} ${props.mode === 'dark' ? 'bg-dark' : ''}`} style={props.mode === 'light' ? myStyleSheet : {}}>
            {/* using ternary operator we have set the navbar properties */}
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* props.title recieves the title attribute in jSX call and changes the value as per our choice */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.contact}</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex"> */}
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

                    {/* as input tag does not need Link closing tag we add /> at the end of input so it closes */}

                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    {/* </form> */}

                    <label htmlFor="ColorInput" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Color picker</label>
                    <input onChange={handleChangeColor} type="color" className="form-control form-control-color mx-3" id="ColorInput" title="Choose your color" style={props.mode === 'light' ? myStyleSheet : { backgroundColor: '#212529', border: 'none' }} />

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        {/* Using ternary operator here we have set the reverse pattern for text in navbar
                        ie when navbar is in dark mode text will be light and when navbar in light mode text in dark  */}
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // When we give isRequired for the proptype then it will give error if value is missing
    about: PropTypes.string,
    contact: PropTypes.string
    // pts shortcut for Proptypes.string
};
// Using the propTypes we can set datatype for our props

Navbar.defaultProps = {
    title: "Set Title Here",
    about: "Set About Here",
    contact: "Set Contact Here",
};
// If we dont set values in JSX then it will check default props
