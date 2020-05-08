import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { getMembers } from '../redux/actions/WishlistActions';

const FamilyMembers = ({members, getMembers, match}) =>{

    useEffect(()=>{
        getMembers(match.params.family);
    },[]);

    return(
        <div className="FamilyMembers">
            <h2>The {match.params.family} Family</h2>
            {members.map((member)=>(
                 <Link to={`/wishlist/${member.id}`} key={member.id}>View {member.firstname} {member.lastname}'s wishlist</Link>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      members:state.wishlistReducer.members
    };
  }

export default connect(mapStateToProps, { getMembers })(FamilyMembers);