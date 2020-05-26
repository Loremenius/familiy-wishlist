import React from "react";
import { connect } from "react-redux";

const ViewList = ({ gifts, history }) =>{
    function showPurchased(purchased){
        if(purchased) return (<p>This gift has been purchased</p>)
        else return (<p></p>)
    }

    return(
        <div className="Wishlist">
            {gifts.map((gift)=>(
                <div className="gift" key={gift.id}>
                    <h3>{gift.name}</h3>
                    
                    <p>{gift.gift_url}</p>

                    <p>{gift.description}</p>

                    {showPurchased(gift.purchased)}

                    <button 
                        onClick={()=>history.push(`/wishlist/${gift.user_id}/confirm/${gift.id}`)}
                    >
                        Mark as Purchased
                    </button>
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