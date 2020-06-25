import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearGifts } from "../redux/actions/WishlistActions";

const FamilyMembers = ({ families, match, clearGifts }) =>{

    useEffect(()=>{
        // clears gifts array in wishlist reducer.
        clearGifts();
    },[])

    // creates component to display a list of family members from a certain family. The family is retrieved from match.params.family
    return(
        <div className="familyMembers">
            <h2>The {match.params.family} Family</h2>
            <div className='viewLinks'>
                {families[match.params.family].members.map((member)=>(
                    <Link 
                        to={`/wishlist/${match.params.family}/${member.id}`} 
                        key={member.id}
                    >
                        View {member.firstname}'s wishlist
                    </Link>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      families:state.wishlistReducer.families
    };
  }

export default connect(mapStateToProps, { clearGifts })(FamilyMembers);