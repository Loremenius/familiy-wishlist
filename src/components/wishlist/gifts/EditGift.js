import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editGift, removeGift } from "../../../redux/actions/WishlistActions";
import { axiosWithAuth } from "../../axiosWithAuth";

const EditGift = ({ match, user_id, history, editGift, removeGift }) =>{
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
        editGift(user_id, match.params.gift_id, gift, match.params.family, history);
    }

    function onClickRemove(e){
        e.preventDefault();
        removeGift(user_id, match.params.gift_id, match.params.family, history);
    }

    function onCancel(e){
        e.preventDefault();
        setGift({ name:'', description:'', gift_url:'' });
        history.push(`/wishlist/${match.params.family}/${user_id}`)
    }

    useEffect(()=>{

        axiosWithAuth().get(`http://localhost:4000/api/user/wishlist/list/${match.params.gift_id}`)
            .then(res=>{

                if(res.data.user_id !== user_id){
                    history.push('/home');
                }

                setGift({
                    ...gift,
                    ...res.data
                });
            })
            .catch(error=>{
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
                console.log(error);
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
                <div className="buttons">
                    <button onClick={onSubmit}>Update Gift</button>
                    <button onClick={onClickRemove}>Remove Gift</button>
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

export default connect(mapStateToProps, { editGift, removeGift })(EditGift);