import React from "react";
import {Route} from "react-router-dom"
import Landing from "./Landing";
import Login from "./Login";
import Home from './Home';
import FamilyMembers from "./FamilyMembers";
import Wishlist from "./wishlist"
import EditGift from './wishlist/gifts/EditGift';
import ConfirmPurchased from "./wishlist/gifts/ConfirmPurchased";
import AddGift from './wishlist/gifts/AddGift';
import PrivateRoute from './PrivateRoute';

const Routes = () =>{

    return(
        <div className="Routes">

            <Route exact path="/" component={ Landing }/>
            <Route path="/register"/>
            <PrivateRoute path="/home" component={ Home }/>
            <Route path="/login" component = { Login }/>
            <PrivateRoute path='/wishlist/:family' exact component = { FamilyMembers }/>
            <PrivateRoute path='/wishlist/:family/:id' exact component = { Wishlist }/>
            <PrivateRoute path='/wishlist/:family/:id/confirm/:gift_id' component = { ConfirmPurchased }/>
            <PrivateRoute path='/wishlist/:family/:id/edit/:gift_id' exact component = { EditGift }/>
            <PrivateRoute path='/wishlist/:family/:id/add' exact component = { AddGift }/>

        </div>
    )
}

export default Routes;