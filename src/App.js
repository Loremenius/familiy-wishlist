import React from 'react';
import './css/index.css';
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

function App({ showNavbar }) {
  function displayNavbar(){
    // pulls boolean from redux. if true, displays navbar. otherwise it will display nothing
    if (showNavbar) return (<NavBar/>)
    else return (<p></p>)
  }
  return (
    <div className="App">
      <Helmet>
        <title>Family Wishlist</title>
      </Helmet>

      {displayNavbar()}

      <Routes/>
    </div>
  );
}

function mapStateToProps(state){
  return {
    showNavbar: state.loginReducer.showNavbar
  }
}

export default connect(mapStateToProps, {})(App);
