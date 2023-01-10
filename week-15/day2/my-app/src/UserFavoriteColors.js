
function UserFavoriteColors(props) {
    return (
    <div>
    <h3>Favorite Animals: </h3>
    <ul>
      {props.favAnimals.map((animal, index) => 
        <li key={index}>{animal}</li>
      )}
    </ul>
  </div>
);
}

export default UserFavoriteColors;
