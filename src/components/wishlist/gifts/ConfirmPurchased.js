import React, { useState, useEffect } from "react";
import findGiftIndex from "../../../redux/reducers/functions/findGiftIndex";
import { connect } from 'react-redux';
 
const ConfirmPurchased = ({ match, history, gifts }) =>{
    const [giftName, setGiftName] = useState('');

    useEffect(()=>{
        const index = findGiftIndex(gifts, match.params.gift_id)
        const gift = gifts[index];
        setGiftName(gift.name);
    },[]);

    return (
        <div className = "confirmPurchase">
            <p>Are you sure you want to mark <strong>{giftName}</strong> as purchased? There is no reversing this action.</p>
            <button>Mark as purchased</button>
            <button 
                onClick={ ()=> history.push(`/wishlist/${match.params.id}`) }>
                Cancel
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        gifts:state.wishlistReducer.gifts
    }
}

export default connect(mapStateToProps, { })(ConfirmPurchased);