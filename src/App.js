import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./Home";
import useEffectPage from "./UseEffectPage";
import useStatePage from "./UseStatePage";
import Navbar from './Navbar'

//useEffect : side effect when a resource type changes
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/useStatePage" component={useStatePage} />
          <Route path="/useEffectPage" component={useEffectPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
