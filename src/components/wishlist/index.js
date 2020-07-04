import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from '../../redux/actions/WishlistActions';
import  EditList  from './EditList';
import ViewList from './ViewList';

const Wishlist = ({gifts, getList, match, user_id, history, families}) =>{
    // gets the user id from the parameters and pulls the user from the members array. 
    const user = families[match.params.family].members.find(user=> user.id === parseInt(match.params.id));
    const displayList = ()=>{
        // if the the id used in the link is the id of the user: view gifts in edit mode. Otherwise view them in view mode. 
        if (parseInt(match.params.id) === user_id) return <EditList gifts = {gifts} history = {history} match = {match}/>
        else return <ViewList gifts = {gifts} history = {history} match = {match}/> 
    }
    useEffect(()=>{
        getList(match.params.id, history);
    },[match.params.id]);
    // This component creates the wishlist and will render gifts in either edit or view only mode. 
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