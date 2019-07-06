import React from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import "./App.css";
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import City from "./Pages/City";
import LoginProvider from "./Contexts/LoginProvider";
import LoginContext from "./Contexts/LoginContext";
import AllPlays from "./Pages/AllPlays";
import AllMovies from "./Pages/AllMovies";
import MovieDesc from "./Components/MovieDesc";
import LoginSignup from "./Pages/LoginSignup";
function App() {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <Route
            path="/signup"
            exact={true}
            component={() => {
              return <LoginWrapper page="signup" />;
            }}
          />
          <Route
            path="/login"
            exact={true}
            component={() => {
              return <LoginWrapper page="login" />;
            }}
          />
          <PrivateRoute
            path={"/main/" + localStorage.getItem("city")}
            exact="true"
            component={MainPage}
          />
          <PrivateRoute
            path={
              "/main/" +
              localStorage.getItem("city") +
              "/movies/bookTickets/:id/:type"
            }
            component={MovieDesc}
          />

          <PrivateRoute
            path={"/main/" + localStorage.getItem("city") + "/movies"}
            exact="true"
            component={AllMovies}
          />
          <PrivateRoute
            path={"/main/" + localStorage.getItem("city") + "/plays"}
            exact="true"
            component={AllPlays}
          />
          <Route path="/" exact="true" render={props => <LoginWrapper />} />
        </Router>
      </LoginProvider>
    </div>
  );
}
function LoginWrapper(props) {
  const {
    state: { loginInfo },
    actions: { setLoginDetails, getUserDetails }
  } = useContext(LoginContext);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      var city = localStorage.getItem("city");
      console.log(city);
      console.log("init");
      firebase.auth().onAuthStateChanged(
        user => {
          console.log("login updated");
          console.log(user);
          if (user) {
            if (city)
              setLoginDetails({ city: city, isLoggedIn: true, user: user });
            else {
              setLoginDetails({ ...loginInfo, isLoggedIn: true, user: user });
            }
            console.log("login updated");
          } else {
            if (city)
              setLoginDetails({ city: city, isLoggedIn: false, user: null });
            else {
              setLoginDetails({ ...loginInfo, isLoggedIn: true, user: user });
            }
          }
        },
        error => {}
      );
    }
  }, []);
  console.log("called");
  if (loginInfo && loginInfo.isLoggedIn === false) {
    return <LoginSignup page={props.page} />;
  }
  if (loginInfo && loginInfo.city !== null) {
    return <Redirect to={"/main/" + loginInfo.city} />;
  } else {
    if (loginInfo.city === null) {
      return <City />;
    }
  }
  return <Redirect to={"/main/" + loginInfo.city} />;
}
function PrivateRoute({ component: Component, ...rest }) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (loginInfo.city === null) {
          return <Redirect to="/" />;
        }
        // if (loginInfo && loginInfo.isLoggedIn === false) {
        //   return <LoginSignup page={props.page} />;
        // }
        return <Component {...props} />;
      }}
    />
  );
}

export default App;
