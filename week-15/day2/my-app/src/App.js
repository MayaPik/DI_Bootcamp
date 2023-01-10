
import Exercise4 from './Exercise4';
import UserFavoriteColors from './UserFavoriteColors';
const myelement = <h1>I Love JSX!</h1>;

const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const User = (props) => {
  const {firstName, lastName} = props.user;
  return (
    <div>
    <h3>First Name : {firstName}</h3>
    <h3>Lasr Name : {lastName}</h3>
    </div>
  )
}
function App() {
    return (
<div>
      <h1>I do not use JSX</h1>
      <h2>Hello World</h2>
      <h1>{myelement}</h1>
      <h1>React is {sum} times better with JSX</h1>

  <User user={user}/>
  <UserFavoriteColors favAnimals={user.favAnimals}/>
  <Exercise4 />
  </div>
    )
}

export default App;