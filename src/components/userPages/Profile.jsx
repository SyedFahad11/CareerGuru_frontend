import React from "react";
import Navbar from "./Navbar";

function Profile() {
    return (
        <div>
            <Navbar/>
            <div class=" text-center container">
                <div class="row ">
                    <div class="col-12 mt-5">

                        <form action="/user" class="form-profile" method="POST">

                            <h5 class="h4 mb-4 font-weight-normal">My Profile</h5>

                            <input type="email" name="email" class="form-control m-1 bottom" placeholder=" Name" />

                            <input type="password" name="password" class="form-control m-1 bottom" placeholder=" Password" />

                            <div class="m-1 " >
                                <input class="form-control  float-left" style={{width: '500px'}} type="password" name="password" placeholder=" Skills" />
                                <button type="button" class="btn btn-sm mt-2 btn-primary ">ADD</button>
                            </div>




                            <div class="form-control " style={{marginTop:'11px'}}>
                                <label class="float-left"> How much pay are you looking for?</label>
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

                            <div class="form-control mt-1 ">
                                <label class="float-left"> Select Qualification:</label>
                                <select>
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

                            <div class="form-control mt-1" >
                                <label class="float-left "> Upload Resume:</label>
                                <input type="file" name="password" />
                            </div>

                            <button class="btn mt-2 px-5 btn-md btn-primary " type="submit">UPDATE DETAILS</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Profile