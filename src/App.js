import React, { Fragment, Suspense, lazy,  } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import theme from "./theme";
import PrivateRoutes, { AuthRoutes } from './routes/index';
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Apollo from "./Apollo";

const Home = lazy(() => import("./pages/home"));
const Fallback = lazy(() => import("./pages/fallBack"));
const Board = lazy(() => import("./pages/board"));

function App() {
  return (
    <Router>
      <Apollo>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              {/* <AuthRoutes exact path="/login" component={Login} /> */}
              <PrivateRoutes path="/home-page" component={Home} />
              <PrivateRoutes path="/board-page" component={Board} />
              <PrivateRoutes component={Fallback} />
            </Switch>
          </Suspense>
        </MuiThemeProvider>
      </Apollo>
    </Router>
  );
}

serviceWorker.register();

export default App;
