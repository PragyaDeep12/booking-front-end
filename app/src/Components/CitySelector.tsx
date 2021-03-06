import React from "react";
import { useState, useContext } from "react";
import SearchComponent from "./SearchComponent";
import EachCity from "./EachCity";
import { Redirect } from "react-router-dom";
import { popularCitiesConstant, citiesConstant } from "../AppConstants";
import LoginContext from "../Contexts/LoginContext";
export default function CitySelector(props) {
  const popularCities = popularCitiesConstant;
  const {
    state: { loginInfo },
    actions: { setCity }
  }: any = useContext(LoginContext);
  const cities = citiesConstant;
  const [pCities, setPCities] = useState(popularCities);
  const [otherCityList, setOtherCityList] = useState(cities);
  const [hidden, setHidden] = useState(true);
  const selectCity = city => {
    setCity(city);
    localStorage.setItem("city", city);
    console.log("here");
    window.location.href = "/main/" + localStorage.getItem("city");
  };
  return (
    <div className="loading-background center  ">
      <div className="city-selector-container">
        <SearchComponent
          placeholder="Search for a city"
          searchCallback={key => {
            console.log(key);
            if (key) {
              setPCities(
                [...popularCities].filter(city => {
                  return city.toUpperCase().startsWith(key.toUpperCase());
                })
              );
              setOtherCityList(
                [...cities, ...popularCities].filter(city => {
                  return city.toUpperCase().startsWith(key.toUpperCase());
                })
              );
            } else {
              setPCities(popularCities);
              setOtherCityList(cities);
            }
          }}
        />

        <br />
        <div className="row " style={{ wordWrap: "break-word" }}>
          {pCities.map((item, index) => {
            return (
              <EachCity cityName={item} setCity={selectCity} key={index} />
            );
          })}
        </div>

        <div>
          <button
            className="btn btn-link"
            hidden={!hidden}
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            View Other Cities
          </button>
        </div>
        <div className="cityList" id="cityList" hidden={hidden}>
          <div>
            <span>Other Cities</span>
          </div>
          <div className="row">
            {otherCityList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-md-3 "
                  onClick={() => {
                    selectCity(item);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="btn btn-link"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              Hide Other Cities
            </button>
          </div>
        </div>

        {props.parent ? (
          <div>
            <button
              className="btn btn-light"
              onClick={() => {
                var elm = document.getElementById("popup");
                if (elm) {
                  elm.hidden = true;
                }
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
