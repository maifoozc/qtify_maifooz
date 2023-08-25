import "./App.css";
import CardComponent from "./component/CardComponent";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import TopAlbum from "./component/TopAlbum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
     <TopAlbum/>
    </div>
  );
}

export default App;
