import React from "react";

function Register() {
    return (
        <div>
            <div className=" text-center container">
                <div className="row ">
                    <div className="col-12 left-form ">

                        <form action="/user" className="form-signup" method="POST">
                            <img className="mb-3" src="newsletter.jfif" alt="" width="72" height="72" />
                            <h5 className="h5 mb-12 font-weight-normal">Build your Career</h5>

                            <input type="email" name="email" className="form-control bottom" placeholder=" UserName" />
                            <input type="email" name="email" className="form-control bottom" placeholder=" Email" />
                            <input type="password" name="password" className="form-control bottom" placeholder=" Password" />
                            <input type="text" name="password" className="form-control bottom" placeholder=" Enter skills here" />



                            <div className="form-control">
                                <label className="float-left"> How much pay are you looking for?</label>
                                <select>
                                    <option value="BMW">Any
                                    </option>
                                    <option value="Mercedes">Above 1LPA
                                    </option>

                                    <option value="Audi"> Above 3LPA
                                    </option>
                                    <option value="Skoda">Above 5LPA
                                    </option>
                                    <option value="Skoda">Above 10LPA
                                    </option>
                                </select>
                            </div>
                            <div className="form-control ">
                                <label className="float-left"> Select Qualification:</label>
                                <select >
                                    <option value="BMW"> 10 and below
                                    </option>
                                    <option value="Mercedes"> Intermediate
                                    </option>

                                    <option value="Audi"> Graduate
                                    </option>
                                    <option value="Skoda"> PG and above
                                    </option>
                                </select>
                            </div>
                            <div className="form-control " >
                                <label className="float-left "> Upload Resume:</label>
                                <input  type="file" name="password"  />
                            </div>


                            <button className="btn mt-2 btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Register;