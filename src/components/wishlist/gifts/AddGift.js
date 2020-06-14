import React, { useState } from "react";
import { connect } from "react-redux";
import { addGift } from "../../../redux/actions/WishlistActions";

const AddGift = ({ user_id, history, addGift, match }) =>{
    const [gift, setGift] = useState({ name: '', description: '', gift_url: '', user_id: user_id });
    function onChange(e){
        e.preventDefault();
        setGift({
            ...gift,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        addGift(user_id, gift, match.params.family, history);
    }

    function onCancel(e){
        e.preventDefault();
        setGift({ name:'', description:'', gift_url:'' });
        history.push(`/wishlist/${match.params.family}/${user_id}`)
    }

    return(
        <div className="editForm">
            <h2>Adding Gift</h2>
            <form>
                <label>
                    <p>Gift name (required)</p>
                    <input 
                        type="text" 
                        value = {gift.name} 
                        name="name" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Gift description (optional)</p>
                    <textarea 
                        type="text" 
                        value = {gift.description} 
                        name="description" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Gift URL/Link (optional)</p>
                    <textarea type="text" 
                        value = {gift.gift_url} 
                        name="gift_url" 
                        onChange={onChange}
                    />
                </label>
                <div className="buttons">
                    <button onClick={onSubmit}>Add Gift</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { addGift })(AddGift);