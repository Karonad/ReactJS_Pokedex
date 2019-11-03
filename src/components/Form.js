import React from 'react';

const Form = ({ handleSubmit }) => (

    <>
        <form className="myForm form-inline my-2 my-lg-0 pl-5" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </>
);

export default Form;