import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/Home';
import {Workouts} from './pages/Workouts';
import {Exercises} from './pages/Exercises';
import {Nutrition} from './pages/Nutrition';
import {Login} from './pages/Login';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {JumbotronBottom} from './components/JumbotronBottom';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <br></br>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workouts" component={Workouts} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/nutrition" component={Nutrition} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />

          </Switch>
        </Router>

      </Layout>
      <br></br>
      <br></br>
      <div className="position-relative"><JumbotronBottom /></div>
      
    </React.Fragment>
  );
}

export default App;
