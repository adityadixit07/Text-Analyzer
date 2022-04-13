import React from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react';
export default function Navbar(props) {
    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-dark"}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/" >{props.title}</a>
                <button className="btn btn-primary navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">{props.aboutText}</a>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>

                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

                            <label className="form-check- text-white" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.prototypes = {
    title: PropTypes.string
};
// if we are not passing any title to component then it takes it deffault tile.
// Navbar.defaultProps={
//     title:"aditya",
//     aboutText:"hello"
// }