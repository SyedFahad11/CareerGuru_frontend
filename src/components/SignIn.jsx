import React from "react";

function SignIn() {
    return (
        <div className="container text-center signin">
            <div className="row">
                <div className="col-12">

                    <form action="/user" className="form-signin" method="POST" >
                        <img className="mb-4" src="./newsletter.jfif" alt="pic" width="72" height="72" />

                        <h1 className="h5 mb-3 font-weight-normal">Build your Career</h1>

                        <input type="email" name="email" className="form-control bottom" placeholder="Enter Email" />

                        <input type="password" name="password" className="form-control bottom" placeholder="Enter Password" />
                        <br></br>
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>

                        <p className="mt-2">Not Registered? <a href='register'>Register Here</a></p>
                    </form>
                </div>

            </div>
        </div>)
};
export default SignIn;