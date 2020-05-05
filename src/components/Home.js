import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { getFamilies } from '../redux/actions/WishlistActions';

const Home = ({families, user, getFamilies}) =>{

    useEffect(()=>{
        getFamilies();
    },[]);

    return(
        <div className="Home">
            <h1>Welcome {user.username}</h1>
            <Link to="/wishlist">Click here to view your Wishlist!</Link>
            {families.map((family)=>(
                 <Link tto={`/family/${family}`}>View {family} members</Link>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      isFetching: state.wishlistReducer.isFetching,
      error: state.wishlistReducer.error,
      families: state.wishlistReducer.families,
      user:state.loginReducer.user
    };
  }

export default connect(mapStateToProps, { getFamilies })(Home);