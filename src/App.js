import "./App.css";
import CardComponent from "./component/CardComponent";
import FAQ from "./component/FAQ";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import NewAlbums from "./component/NewAlbums";
import TabFilterComponent from "./component/TabsFilterComponent";
import TopAlbum from "./component/TopAlbum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopAlbum />
      <NewAlbums />
      <TabFilterComponent/>
      <FAQ />
    </div>
  );
}

export default App;
