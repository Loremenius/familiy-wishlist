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
        editGift(user_id, match.params.id, gift, history);
    }

    function onClickRemove(e){
        e.preventDefault();
        removeGift(user_id, match.params.id, history);
    }

    useEffect(()=>{

        axiosWithAuth().get(`http://localhost:4000/api/user/wishlist/list/${match.params.id}`)
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
                console.log(error);
            });

    },[]);

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
                <button onClick={onSubmit}>Edit Gift</button>
                <button onClick={onClickRemove}>Remove Gift</button>
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