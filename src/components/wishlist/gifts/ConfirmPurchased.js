import React, { useState, useEffect } from "react";
import findGiftIndex from "../../../redux/reducers/functions/findGiftIndex";
import { connect } from 'react-redux';
import { confirmPurchased } from "../../../redux/actions/WishlistActions";
 
const ConfirmPurchased = ({ match, history, gifts, confirmPurchased }) =>{
    const [giftName, setGiftName] = useState('');

    useEffect(()=>{
        // find the index of the gift id from parameters
        const index = findGiftIndex(gifts, match.params.gift_id)
        // use the index to get the gift from state.
        const gift = gifts[index];
        // take the name of the gift and update the giftName variable for the component.
        setGiftName(gift.name);
    },[]);

    function confirm(){
        // send request to back end to tag gift as purchased.
        confirmPurchased(match.params.id, match.params.gift_id, match.params.family, history);
    }
    // Creates component to verify the user wants to mark a gift as purchased.
    return (
        <div className = "confirmPurchase">
            <h2>Mark as Purchased</h2>
            <p>Are you sure you want to mark <strong>{giftName}</strong> as purchased?</p>
            <p>There is no reversing this action.</p>
            <div className='buttons'>

                <button 
                    onClick={ confirm }
                >
                    Mark as purchased
                </button>

                <button 
                    onClick={ ()=> history.push(`/wishlist/${match.params.family}/${match.params.id}`) }
                >
                    Cancel
                </button>

            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        gifts:state.wishlistReducer.gifts
    }
}

export default connect(mapStateToProps, { confirmPurchased })(ConfirmPurchased);