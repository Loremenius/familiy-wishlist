import React from "react";
import { connect } from "react-redux";

const ViewList = ({gifts}) =>{
    function showPurchased(purchased){
        if(purchased) return (<p>This gift has been purchased</p>)
        else return (<p></p>)
    }

    return(
        <div className="Wishlist">
            <h2>Wishlist</h2>
            {gifts.map((gift)=>(
                <div className="gift" key={gift.id}>
                    <h3>{gift.name}</h3>
                    <p>{gift.gift_url}</p>
                    <p>{gift.description}</p>
                    {showPurchased(gift.purchased)}
                    <button>Mark as Purchased</button>
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