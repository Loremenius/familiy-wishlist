import React from "react";

const ConfirmPurchased = ({ match, history }) =>{

    return (
        <div className = "confirmPurchase">
            <p>Are you sure you want to mark as purchased? There is no reversing this action.</p>
            <button>Mark as purchased</button>
            <button 
                onClick={ ()=> history.push(`/wishlist/${match.params.id}`) }>
                Cancel
            </button>
        </div>
    )
}

export default ConfirmPurchased;