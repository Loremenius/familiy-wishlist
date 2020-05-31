import React from "react";
import { connect } from "react-redux";

const EditList = ({ gifts, history, user_id, match }) =>{

    return(
        <div className = 'editList'>
            <button onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/add`)}>Add gift to wishlist</button>
            <div className="wishlist">
                {gifts.map((gift)=>(
                    <div className="gift" key={gift.id} onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/edit/${gift.id}`)}>
                        <h3>{gift.name}</h3>
                        <a>View gift at original website</a>
                        <p>{gift.description}</p>
                    </div>
                ))}
            </div>
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