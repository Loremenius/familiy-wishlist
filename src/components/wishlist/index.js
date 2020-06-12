import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from '../../redux/actions/WishlistActions';
import  EditList  from './EditList';
import ViewList from './ViewList';

const Wishlist = ({gifts, getList, match, user_id, history, families}) =>{
    const user = families[match.params.family].members.find(user=> user.id === parseInt(match.params.id));
    const displayList = ()=>{
        if (parseInt(match.params.id) === user_id) return <EditList gifts = {gifts} history = {history} match = {match}/>
        else return <ViewList gifts = {gifts} history = {history} match = {match}/> 
    }
    useEffect(()=>{
        getList(match.params.id);
    },[match.params.id]);

    return(
        <div className="indexList">
            <h2>{user.firstname}'s Wishlist</h2>
            <hr class="solid"/>
            {displayList()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      families: state.wishlistReducer.families,
      gifts:state.wishlistReducer.gifts,
      user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { getList })(Wishlist);