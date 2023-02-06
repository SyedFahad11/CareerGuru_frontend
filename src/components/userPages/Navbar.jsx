import React from "react";

function Navbar() {
    return (
        <div className="container-fluid ">
            <nav className="navbar navbar-expand-lg navbar-bg navbar-light " >
                <a className="navbar-brand " href='/' >CareerGuru</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar navbar-collapse" id="navbarToggler"
                >
                    <ul className="navbar-nav nav-ul">
                        <li className="nav-item ">
                            <a className="nav-link">Recommended Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Saved Jobs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" >Applied Jobs</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav nav-ul">
                        <li className="nav-item">
                            <a className="nav-link " href="/user/profile" >Profile</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Logout</a>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    )
}
export default Navbar;