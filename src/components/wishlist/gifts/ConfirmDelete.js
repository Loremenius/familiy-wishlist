import React, { useState, useEffect } from "react";
import findGiftIndex from "../../../redux/reducers/functions/findGiftIndex";
import { connect } from 'react-redux';
import { removeGift } from "../../../redux/actions/WishlistActions";
 
const ConfirmDelete = ({ match, history, gifts, removeGift }) =>{
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
        // send request to back end to delete gift.
        removeGift(match.params.id, match.params.gift_id, match.params.family, history);
    }
    // Creates component to verify the user wants to delete gift.
    return (
        <div className = "confirmPurchase">
            <h2>Removing Gift</h2>
            <p>Are you sure you want to remove <strong>{giftName}</strong>?</p>
            <p>There is no reversing this action.</p>
            <div className='buttons'>

                <button 
                    onClick={ confirm }
                >
                    Remove Gift
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

export default connect(mapStateToProps, { removeGift })(ConfirmDelete);