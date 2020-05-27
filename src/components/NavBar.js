import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ families, user }) =>{

    return (
        <nav className = "navBar">
            <Link to={`/wishlist/${user.lastname}/${user.user_id}`}>Your Wishlist</Link>
            {Object.keys(families).map((family)=>(
                 <Link to={`/wishlist/${family}`} key={family}> {family} </Link>
            ))}
        </nav>
    )
}

function mapStateToProps(state) {
    return {
      families: state.wishlistReducer.families,
      user:state.loginReducer.user
    };
  }

export default connect(mapStateToProps, { })(NavBar);