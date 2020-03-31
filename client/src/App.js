import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Workouts } from "./pages/Workouts/index";
import { Exercises } from "./pages/Exercises";
import { Nutrition } from "./pages/Nutrition";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
import { PrivateRoute } from "./pages/PrivateRoutes";
import { Layout } from "./components/layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { JumbotronBottom } from "./components/JumbotronBottom";
import UserContext from "./store/store";

function App() {
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    age: "",
    weight: "",
    loggedIn: false
  });

  return (
    <React.Fragment>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <br></br>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                isLoggedIn={user.loggedIn}
                exact
                path="/workouts"
                component={Workouts}
              />
              <Route exact path="/exercises" component={Exercises} />
              <Route exact path="/nutrition" component={Nutrition} />
              <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <br></br>
          <br></br>
          <div className="position-relative">
            <JumbotronBottom />
          </div>
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
