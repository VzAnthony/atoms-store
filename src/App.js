import "./App.css";
import { Navbar } from "./components/Navbar";
import { ItemList } from "./components/ItemList";
import { ItemDetail } from "./components/ItemDetail";

function App() {
  return (
    <>
      <Navbar />
      <ItemList />
      <hr />
      <ItemDetail />
    </>
  );
}

export default App;
