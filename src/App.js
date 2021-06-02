import './App.css';
import { Homepage } from './Content-HomePage/homepage';
import { Header } from './Header/header';
import { Menuup } from './MenuUp/menuup';
import MapContainer from "./MapComponent";

function App(props) {
  return (
    <div className="App">
      <Header></Header> 
      <div className="realcenter">
        <div className="Hpage"><Homepage></Homepage>
        <Menuup></Menuup>
        </div>
        
      </div>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
