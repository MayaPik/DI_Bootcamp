import Header from "./Header";
import Card from "./Card";
import Contact from "./Contact";

const cards = [{
  title:"About the Company",
  img: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
  logo: "faEnvelope",
  text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
{
  title:"Our Values",
  img: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
  logo: "faEnvelope",
  text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
{
  title:"Our Mission",
  img: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
  logo: "faEnvelope",
  text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
}
]

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="column">
     {cards.map(each => (
      <Card {...each}/>
      ))}
    </div>
    <Contact/>
    </div>
  );
}

export default App;
