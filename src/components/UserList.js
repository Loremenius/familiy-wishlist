import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from '../redux/actions/WishlistActions';

const UserList = ({gifts, getList, userID}) =>{

    useEffect(()=>{
        getList(userID);
    },[]);

    return(
        <div className="Wishlist">
            <h2>Wishlist</h2>
            {gifts.map((gift)=>(
                <div className="gift">
                    <h3>{gift.name}</h3>
                    <p>{gift.gift_url}</p>
                    <p>{gift.description}</p>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      gifts:state.wishlistReducer.gifts,
      userID:state.loginReducer.user.id
    };
  }

export default connect(mapStateToProps, { getList })(UserList);