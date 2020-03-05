import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Workouts } from "./pages/Workouts";
import { Exercises } from "./pages/Exercises";
import { Nutrition } from "./pages/Nutrition";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
import { PrivateRoute } from "./pages/PrivateRoutes";
import { Layout } from "./components/layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { JumbotronBottom } from "./components/JumbotronBottom";
import { UserContext } from "./userContext";

function App() {
  const [user, setUser] = useState({ name: "test" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <br></br>
      <Layout>
        <Router>
          <Switch>
            <UserContext.Provider value={[user, setUser]}>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                isLoggedIn={user.loggedIn}
                exact
                path="/workouts"
                component={Workouts}
              />
              <Route exact path="/exercises" component={Exercises} />
              <Route exact path="/nutrition" component={Nutrition} />
              <Route exact path="/login">
                <Login />
              </Route>
              <Route component={NoMatch} />
            </UserContext.Provider>
          </Switch>
        </Router>
      </Layout>
      <br></br>
      <br></br>
      <div className="position-relative">
        <JumbotronBottom />
      </div>
    </React.Fragment>
  );
}

export default App;
