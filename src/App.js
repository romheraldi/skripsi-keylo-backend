import logo from './logo.svg';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./redux/store";
import Admin from "./container/admin";

import "./app.css";

function App() {
  return (
      <Provider store={store}>
          <div className="App font-pop bg-gray-800">
              <Switch>
                  {/*<Route exact path="/login" component={Login} />*/}
                  <Route path="/" component={Admin} />
              </Switch>
          </div>
        <ToastContainer closeOnClick />
      </Provider>
  );
}

export default App;
