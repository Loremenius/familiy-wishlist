import React from "react";
import { connect } from "react-redux";

const EditList = ({ gifts, history, user_id, match }) =>{

    function createLinkToGift(gift_url){
        // get the first 4 characters of the url
        const urlBegin = gift_url.slice(0,4);
        //if the url does not include http: add http to the url
        if (urlBegin !== 'http' && !!urlBegin) gift_url = `http://${gift_url}`
        //if there is a url, display a link with reference to that url. Otherwise display empty paragraph tags
        if (!!gift_url) return(<a href={gift_url} target="_blank" >View gift at original website</a>)
        else return (<p></p>)
    }

    return(
        <div className = 'editList'>
            <button className="add" onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/add`)}>Add gift to wishlist</button>
            <p> or </p>
            <p>Click on any gift to edit it's details.</p>
            <hr class="solid"/>
            <div className="wishlist">
                {gifts.map((gift)=>(
                    <div className="gift" key={gift.id} onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/edit/${gift.id}`)}>
                        <h3>{gift.name}</h3>

                        {createLinkToGift(gift.gift_url)}

                        <p>{gift.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      gifts:state.wishlistReducer.gifts,
      user_id:state.loginReducer.user.user_id
    };
  }

export default connect(mapStateToProps, { })(EditList);