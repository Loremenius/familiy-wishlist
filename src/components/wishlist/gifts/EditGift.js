import React, { useState } from "react";
import { connect } from "react-redux";
import { editGift } from "../../../redux/actions/WishlistActions"

const EditGift = ({name, description, gift_url, user_id, id}) =>{
    const [gift, setGift] = useState({name, description, gift_url});
    function onChange(e){
        e.preventDefault();
        setGift({
            ...gift,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        editGift(user_id, id, gift);
    }

    return(
        <div className="form">
            <form onSubmit={onSubmit}>
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
                <button>Edit Gift</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { editGift })(EditGift);