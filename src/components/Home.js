import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { getFamilies } from '../redux/actions/WishlistActions';

const Home = ({families, user, getFamilies, history}) =>{
    useEffect(()=>{
        getFamilies(history);
    },[]);

    // This component displays the links to families and user's wishlist.
    return(
        <div className="home">
            <h2>Welcome {user.firstname}</h2>
            <div className= "viewLinks">
                <button 
                    onClick={()=>history.push(`/wishlist/${user.lastname}/${user.user_id}`)}
                > 
                    View your wishlist 
                </button>
                {Object.keys(families).map((family)=>(
    
                    <button 
                    onClick={()=>history.push(`/wishlist/${family}`)}
                    key={family}
                    > 
                    View {family} family 
                    </button>
                    
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