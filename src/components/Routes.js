import React from "react";
import {Route} from "react-router-dom"
import Landing from "./Landing";
import Login from "./Login"

const Routes = () =>{

    return(
        <div className="Routes">

            <Route exact path="/" component={Landing}/>
            <Route path="/register"/>
            <Route path="/home"/>
            <Route path="/login" component = {Login}/>

        </div>
    )
}

export default Routes;