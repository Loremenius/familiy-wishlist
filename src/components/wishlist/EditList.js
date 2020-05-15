import React from "react";
import { connect } from "react-redux";

const EditList = ({gifts}) =>{

    return(
        <div className="Wishlist">
            <h2>Wishlist</h2>
            {gifts.map((gift)=>(
                <div className="gift" key={gift.id}>
                    <h3>{gift.name}</h3>
                    <p>{gift.gift_url}</p>
                    <p>{gift.description}</p>
                    <button>Edit Gift</button>
                    <button>Remove Gift</button>
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

export default connect(mapStateToProps, { })(EditList);