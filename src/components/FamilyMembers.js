import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const FamilyMembers = ({families, match}) =>{

    return(
        <div className="FamilyMembers">
            <h2>The {match.params.family} Family</h2>
            {families[match.params.family].members.map((member)=>(
                 <Link to={`/wishlist/${member.id}`} key={member.id}>View {member.firstname} {member.lastname}'s wishlist</Link>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      families:state.wishlistReducer.families
    };
  }

export default connect(mapStateToProps, { })(FamilyMembers);