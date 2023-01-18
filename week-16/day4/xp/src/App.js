import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "react-bootstrap";
import PortList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const HomeScreen = () => {
  return (
    <div>
      <ErrorBoundary>
        <h1>Home</h1>
      </ErrorBoundary>
    </div>
  );
};

const ProfileScreen = () => {
  return (
    <div>
      <ErrorBoundary>
        <h1>Profile</h1>
      </ErrorBoundary>
    </div>
  );
};

const ShopScreen = () => {
  function Error() {
    throw new Error("this app has an error");
  }
  return (
    <div>
      <ErrorBoundary>
        <Error />
      </ErrorBoundary>
    </div>
  );
};

function App() {
  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://webhook.site/b0344405-ce3b-4454-a91a-3cc72639523e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        }
      );
      let answer = await res.json();
      console.log(answer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>

      <div style={{ display: "flex" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
        </Routes>
      </div>
      <br />
      <PortList />
      <br />
      <Example1 />
      <br />
      <Example2 />
      <br />
      <Example3 />
    </div>
  );
}

export default App;
