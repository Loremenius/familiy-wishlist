import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from '../../redux/actions/WishlistActions';
import  EditList  from './EditList';
import ViewList from './ViewList';

const Wishlist = ({gifts, getList, match, user_id, history}) =>{
    const displayList = ()=>{
        if (parseInt(match.params.id) === user_id) return <EditList gifts = {gifts} history = {history}/>
        else return <ViewList gifts = {gifts} history = {history}/> 
    }
    useEffect(()=>{
        getList(match.params.id);
    },[]);

    return(
        <div className="Wishlist">
            <h2>Wishlist</h2>
            {displayList()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      gifts:state.wishlistReducer.gifts,
      user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { getList })(Wishlist);