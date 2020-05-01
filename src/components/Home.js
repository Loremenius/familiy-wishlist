import React from "react"
import { Link } from "react-router-dom"

const Home = () =>{
    const User = {username:"Munch"}
    const Families = ['Fernandez', 'Casias', 'Hinton']
    return(
        <div className="Home">
            <h1>Welcome {User.username}</h1>
            <Link to="/wishlist">Click here to view your Wishlist!</Link>
            {Families.map((family)=>(
                 <Link to="/family">View {family} members</Link>
            ))}
        </div>
    )
}

export default Home