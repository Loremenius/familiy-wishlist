import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editGift, removeGift } from "../../../redux/actions/WishlistActions";
import { setError } from "../../../redux/actions/LoginRegisterActions";
import findGiftIndex from "../../../redux/reducers/functions/findGiftIndex";

const EditGift = ({ match, user_id, history, editGift, error, setError, gifts }) =>{
    const [gift, setGift] = useState({name:'', description:'', gift_url:''});
    function onChange(e){
        e.preventDefault();
        setGift({
            ...gift,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        // set error to empty string
        setError('');
        // check to make sure all fields are filled out
        if(!!gift.name){
                // call action to send data to back-end.
                editGift(user_id, match.params.gift_id, gift, match.params.family, history);
        // if not all fields are filled out. change error to display it. 
        }else{
            setError('Gift name is required.');
        }
    }

    const displayError = () =>{
        // if the error is not an empty string: create a paragraph to disaply it.
        if(!!error) return (<p className='error'>{error}</p>)
        // if error is a empty string: create empty paragraph.
        else return (<p></p>)
    }

    function onCancel(e){
        e.preventDefault();
        setGift({ name:'', description:'', gift_url:'' });
        history.push(`/wishlist/${match.params.family}/${user_id}`)
    }

    useEffect(()=>{
        setError('');

        const giftIndex = findGiftIndex(gifts, match.params.gift_id);

        const found_gift = gifts[giftIndex];

        setGift({
            ...gift,
            ...found_gift
        });

    },[]);

    return(
        <div className="editForm">
            <h2>Editing Gift</h2>
            <form>
                <label>
                    <p>Gift name (required)</p>
                    <textarea 
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

                {displayError()}

                <div className="buttons">
                    <button onClick={onSubmit}>Update Gift</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user_id:state.loginReducer.user.user_id,
        error: state.loginReducer.error, 
        gifts:state.wishlistReducer.gifts
    };
  }

export default connect(mapStateToProps, { editGift, setError })(EditGift);