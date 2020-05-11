import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList } from '../redux/actions/WishlistActions';

const FamilyMembers = ({gifts, getList, match}) =>{

    useEffect(()=>{
        getList(match.params.id);
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
      gifts:state.wishlistReducer.gifts
    };
  }

export default connect(mapStateToProps, { getList })(FamilyMembers);