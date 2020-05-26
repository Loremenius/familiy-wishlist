import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const EditList = ({ gifts, history, user_id }) =>{

    return(
        <div className="Wishlist">
            <button onClick={()=>history.push(`/wishlist/${user_id}/add`)}>Add gift to wishlist</button>
            {gifts.map((gift)=>(
                <div className="gift" key={gift.id}>
                    <Link to={`/gift/${gift.id}`}>
                        <h3>{gift.name}</h3>
                        <p>{gift.gift_url}</p>
                        <p>{gift.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      gifts:state.wishlistReducer.gifts,
      user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { })(EditList);