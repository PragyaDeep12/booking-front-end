import * as React from "react";
import { Component, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import MenuNavigation from "./MenuNavigation";
import CitySelector from "./CitySelector";
import appIcon from "../icons/popcorn.svg";
import firebase from "firebase";
import LoginContext from "../Contexts/LoginContext";
export default function Navbar(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <nav className="row bg-dark">
      <div className="popup" hidden={true} id="popup">
        <CitySelector parent={"Navbar"} />
      </div>
      <div className="col-md-2 navbar">
        <label className="header-text navbar">
          <img src={appIcon} alt="" className="small-app-icon" />
          <span>POPCORN</span>
        </label>
      </div>
      <div className="col-md-7">
        <SearchComponent
          placeholder="Search"
          searchCallback={query => {
            props.searchCallback(query);
          }}
        />

        <MenuNavigation />
      </div>
      <div className="col-md-3 ">
        {console.log(loginInfo)}
        {loginInfo.isLoggedIn === true ? (
          <div className="text-right logout-holder">
            {/* <img className="online-user user-icon" /> */}
            <button
              className="btn btn-light logout-button"
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-right logout-holder">
            <Link to="/signup">
              <button className="btn btn-primary logout-button">Sign In</button>
            </Link>
          </div>
        )}
        {/* <img className="menu-icon" /> */}
      </div>
    </nav>
  );
}
