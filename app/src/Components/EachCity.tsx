import React from "react";
import { useContext } from "react";
import LoginContext from "../Contexts/LoginContext";
export default function EachCity(props) {
  // const {
  //   state: { loginInfo },
  //   actions: { setCity }
  // }: any = useContext(LoginContext);
  return (
    <div className="col city-block">
      <img
        className={props.cityName}
        style={{ width: " 100px", height: " 100px" }}
        onClick={() => {
          props.setCity(props.cityName);
        }}
      />
      <div className="city-name">{props.cityName}</div>
    </div>
  );
}
