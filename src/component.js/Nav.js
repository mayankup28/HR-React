import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">{props.titel}</a> */}
    <NavLink className="navbar-brand" to="/">{props.titel}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        {/* <a className="nav-link" href="#">{props.aboutUS}</a> */}
        <NavLink className="nav-link" to="/about">{props.aboutUS}</NavLink>
        </li>
        </ul>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        {/* <button onClick={props.greenBtn} type="button" class="btn btn-success">Success</button>
        <button onClick={props.yellowBtn} type="button" class="btn btn-warning ms-2">Warning</button> */}

        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
    <input className="form-check-input ms-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.words}</label>
</div>
    </div>
    </div>
</nav>
    )
}
