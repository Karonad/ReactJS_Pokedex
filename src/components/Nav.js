import React from 'react';
import {Link} from "react-router-dom";

  

const Nav = ({ handleSubmit }) => (
    <nav className="d-flex justify-content-between navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Pokedex</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <form className="myForm form-inline my-2 my-lg-0 pl-5" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" id="filter" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
)

export default Nav;