import React from "react";
import {Route} from "react-router-dom"
import Landing from "./Landing";
import Login from "./Login";
import Home from './Home';
import FamilyMembers from "./FamilyMembers";
import Wishlist from "./wishlist"

const Routes = () =>{

    return(
        <div className="Routes">

            <Route exact path="/" component={Landing}/>
            <Route path="/register"/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component = {Login}/>
            <Route path='/family/:family' component = {FamilyMembers}/>
            <Route path='/wishlist/:id' component = {Wishlist}/>

        </div>
    )
}

export default Routes;