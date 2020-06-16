import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { getFamilies } from '../redux/actions/WishlistActions';

const Home = ({families, user, getFamilies, history}) =>{
    useEffect(()=>{
        getFamilies(history);
    },[]);

    return(
        <div className="home">
            <h2>Welcome {user.firstname}</h2>
            <div className= "viewLinks">
                <Link to={`/wishlist/${user.lastname}/${user.user_id}`}>View your wishlist</Link>
                {Object.keys(families).map((family)=>(
                    <Link to={`/wishlist/${family}`} key={family}>View {family} family</Link>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      families: state.wishlistReducer.families,
      user:state.loginReducer.user
    };
  }

export default connect(mapStateToProps, { getFamilies })(Home);