import React from 'react';
import './App.css';
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";

function App({ showNavbar }) {
  function displayNavbar(){
    if (showNavbar) return (<NavBar/>)
    else return (<p></p>)
  }
  return (
    <div className="App">
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
