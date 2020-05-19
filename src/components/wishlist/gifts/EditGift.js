import React, { useState } from "react";
import { connect } from "react-redux";

const EditGift = ({name, description, gift_url}) =>{
    const [gift, setGift] = useState({name, description, gift_url});
    function onChange(e){
        e.preventDefault();
        setGift({
            ...gift,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div className="Wishlist">
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
                <button>Edit Gift</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {};
  }

export default connect(mapStateToProps, { })(EditGift);