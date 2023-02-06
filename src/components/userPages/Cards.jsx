import React from "react";

function Card(props) {
    return (

        <div className="card card-component col-8 ">
            <div className="card-body">
                <h5 className="card-title mb-3">{props.title}</h5>
                <h6 className="card-subtitle mb-1 text-muted">Salary:{props.Salary}</h6>
                <p className="mb-1 text-muted">Posted By:{props.Recruiter},
                <a href="https://www.arcesium.com/careers/"className="text-muted" style={{color:"black"}}> Arcesium</a></p>
                <p className="mb-1 text-muted">Working Hours:{props.WorkingHours}</p>

                <p className=" mb-1 card-text">{props.Info}</p>
                <p className="mb-2 text-muted">Posted On:{props.postedDate}</p>
                <button className="btn btn-dark mr-3 ml-0 btn-sm px-5">Apply</button>
                <button className="btn btn-dark ml-3 btn-sm px-5">Save</button>

            </div>
        </div>

    )
}
export default Card;