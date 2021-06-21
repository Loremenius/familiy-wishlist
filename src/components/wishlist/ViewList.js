import React from "react";
import { connect } from "react-redux";

const ViewList = ({ gifts, history, match }) =>{
    function showPurchased(purchased, user_id, gift_id){
        if(purchased) return (<p className="purchased">This gift has been purchased</p>)
        else return (
        <button 
            onClick={()=>history.push(`/wishlist/${match.params.family}/${user_id}/confirm/${gift_id}`)}
        >
            Mark as Purchased
        </button>
        )
    }

    function createLinkToGift(gift_url){
        // get the first 4 characters of the url
        const urlBegin = gift_url.slice(0,4);
        //if the url does not include http: add http to the url
        if (urlBegin !== 'http' && !!urlBegin) gift_url = `http://${gift_url}`
        //if there is a url, display a link with reference to that url. Otherwise display empty paragraph tags
        if (!!gift_url) return(<a href={gift_url} rel="noopener" >View gift at original website</a>)
        else return (<p></p>)
    }
    // creates a component to view gifts in view only mode.
    return(
        <div className='viewList'>
            <div className="wishlist">
                {gifts.map((gift)=>(
                    <div className="gift" key={gift.id}>
                        <h3>{gift.name}</h3>

                        <p>{gift.description}</p>

                        {createLinkToGift(gift.gift_url)}

                        {showPurchased(gift.purchased, gift.user_id, gift.id)}
                    </div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      gifts:state.wishlistReducer.gifts
    };
  }

export default connect(mapStateToProps, { })(ViewList);