import React from "react";
import { connect } from "react-redux";

const EditList = ({ gifts, history, user_id, match }) =>{

    function createLinkToGift(gift_url){
        // get the first 4 characters of the url
        const urlBegin = gift_url.slice(0,4);
        //if the url does not include http: add http to the url
        if (urlBegin !== 'http' && !!urlBegin) gift_url = `http://${gift_url}`
        //if there is a url, display a link with reference to that url. Otherwise display empty paragraph tags
        if (!!gift_url) return(<a href={gift_url} target="_blank" rel="noopener noreferrer" >View gift at original website</a>)
        else return (<p></p>)
    }
    // This component creates a version of the user's list that allows them to edit gifts when selecting them.
    return(
        <div className = 'editList'>
            <button className="add" onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/add`)}>Add gift to wishlist</button>
            <div className="wishlist">
                {gifts.map((gift)=>(
                    <div className="gift" key={gift.id}>
                        <h3>{gift.name}</h3>

                        <p>{gift.description}</p>

                        {createLinkToGift(gift.gift_url)}

                        <div className="giftButtons">
                            <button onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/edit/${gift.id}`)}>Edit Gift</button>
                            <button 
                                onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/remove/${gift.id}`)}
                            >
                                Remove Gift
                           </button>
                        </div>
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