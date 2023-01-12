import './App.css';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';
const carInfo = {name: "Ford", model: "Mustang"}

function App() {
  return (
    <div>
      <Car car={carInfo} />
      <Garage size="large"/>
      <Events/>
      <Phone />
      <Color/>
    </div>
  );
}

export default App;
