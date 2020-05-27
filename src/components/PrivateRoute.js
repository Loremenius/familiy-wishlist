import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"

const PrivateRoute = ({component: Component, user, ...rest}) => {
    return (<Route {...rest} render={
        props => !!user.user_id ? (
            <Component {...props}/>
        ) : (
            <Redirect to="/login"/>
        )
    }/>);
}

const mapStateToProps = (state)=>{
    return {
        user: state.loginReducer.user
    }
}

export default connect(mapStateToProps, {})(PrivateRoute)