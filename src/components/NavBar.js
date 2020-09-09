import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ families, user }) =>{

    // This component displays all the links for families and the user's wishlist as a navbar at the top of the page. 
    return (
        <nav className = "navBar">
          <ul>
            <li><Link to={`/wishlist/${user.lastname}/${user.user_id}`}>Your Wishlist</Link></li>
            <li>
              <Link to="/home">Families</Link>
              <ul className="famNav">
                {Object.keys(families).map((family)=>(
                  <li key={family}>
                    <Link to={`/wishlist/${family}`}> {family} </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
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