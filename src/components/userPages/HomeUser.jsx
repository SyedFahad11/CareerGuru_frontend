import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Card from "./Cards";
import {Router,Routes} from "react-router-dom"

function User() {
    return (
        <div>
            <Navbar/>
            <div class="row">
            <Card 
            title='FullStackDeveloper'
            Salary=' 100000/month'
            Recruiter=' Fahad'
            WorkingHours=' 9-5'
            postedDate=' 12/2/22'
            Info='You need to work on MongoDb,React,Node.js,Express and upload all the work done on git'  
            />
            <Card 
            title='Backend Developer'
            Salary=' 100000/month'
            Recruiter=' Fahad'
            WorkingHours=' 9-5'
            postedDate=' 12/2/22'
            Info='You need to work on MongoDb,React,Node.js,Express and upload all the work done on git'  
            />

            </div>
            

            

        </div>



    );
}
export default User;