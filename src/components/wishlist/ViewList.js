import React from "react";
import { connect } from "react-redux";

const ViewList = ({ gifts, history }) =>{
    function showPurchased(purchased, user_id, gift_id){
        if(purchased) return (<p>This gift has been purchased</p>)
        else return (
        <button 
            onClick={()=>history.push(`/wishlist/${user_id}/confirm/${gift_id}`)}
        >
            Mark as Purchased
        </button>
        )
    }

    return(
        <div className="Wishlist">
            {gifts.map((gift)=>(
                <div className="gift" key={gift.id}>
                    <h3>{gift.name}</h3>

                    <p>{gift.gift_url}</p>

                    <p>{gift.description}</p>

                    {showPurchased(gift.purchased, gift.user_id, gift.id)}
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

export default connect(mapStateToProps, { })(ViewList);