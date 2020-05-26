import React from "react";
import {Route} from "react-router-dom"
import Landing from "./Landing";
import Login from "./Login";
import Home from './Home';
import FamilyMembers from "./FamilyMembers";
import Wishlist from "./wishlist"
import EditGift from './wishlist/gifts/EditGift';
import ConfirmPurchased from "./wishlist/gifts/ConfirmPurchased";

const Routes = () =>{

    return(
        <div className="Routes">

            <Route exact path="/" component={ Landing }/>
            <Route path="/register"/>
            <Route path="/home" component={ Home }/>
            <Route path="/login" component = { Login }/>
            <Route path='/family/:family' component = { FamilyMembers }/>
            <Route path='/wishlist/:id' exact component = { Wishlist }/>
            <Route path='/wishlist/:id/confirm/:gift_id' component = { ConfirmPurchased }/>
            <Route path='/gift/:id' component = { EditGift }/>

        </div>
    )
}

export default Routes;