import "./App.css";
import CardComponent from "./component/CardComponent";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardComponent />
    </div>
  );
}

export default App;
