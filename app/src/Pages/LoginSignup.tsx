import React, { useState, useEffect } from "react";
import SignupComponent from "../Components/SignupComponent";
import LoginComponent from "../Components/LoginComponent";
import appIcon from "../icons/popcorn.svg";
import { Link, Redirect } from "react-router-dom";

function LoginSignup(props: any) {
  return (
    <React.Fragment>
      <img src={appIcon} alt="" className="app-icon" />

      {props.page === "signup" ? <SignupComponent /> : <LoginComponent />}
      <Link to={"/main/" + localStorage.getItem("city")} className="hyperlink">
        Skip Sign In
      </Link>
    </React.Fragment>
  );
}
// const mapPropsToState = createSelector(
//   (state: any) => state.user,
//   user => ({
//     user
//   })
// );
// const mapPropsToAction = {
//   onCreateUser: createUser
// };
// export default connect(
//   mapPropsToState,
//   mapPropsToAction
// )(LoginSignup);
export default LoginSignup;
