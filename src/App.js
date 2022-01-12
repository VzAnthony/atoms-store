import "./App.css";
import { Navbar } from "./components/Navbar";
import { ItemList } from "./components/ItemList";
import { ItemDetail } from "./components/ItemDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/categories/:category">
          <ItemList />
        </Route>
        <Route path="/item/:id">
          <ItemDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
