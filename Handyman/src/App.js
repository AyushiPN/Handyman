import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="container">
      <Home />

    <form action="../../post" method="post">
      <button type="submit">Connected</button>
    </form>
    </div>
  );
}

export default App;
