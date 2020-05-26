import React, { useState } from "react";
import { connect } from "react-redux";
import { editGift } from "../../../redux/actions/WishlistActions";

const EditGift = ({ match, user_id, history, editGift }) =>{
    const [gift, setGift] = useState({ name:'', description:'', gift_url:'' });
    function onChange(e){
        e.preventDefault();
        setGift({
            ...gift,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        editGift(user_id, match.params.id, gift, history);
    }

    function onCancel(e){
        e.preventDefault();
        setGift({ name:'', description:'', gift_url:'' });
        history.push(`/wishlist/${user_id}`)
    }

    return(
        <div className="form">
            <form>
                <input 
                    type="text" 
                    value = {gift.name} 
                    name="name" 
                    onChange={onChange}
                />
                <input 
                    type="text" 
                    value = {gift.description} 
                    name="description" 
                    onChange={onChange}
                />
                <input type="text" 
                    value = {gift.gift_url} 
                    name="gift_url" 
                    onChange={onChange}
                />
                <button onClick={onSubmit}>Add Gift</button>
                <button onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { editGift, removeGift })(EditGift);