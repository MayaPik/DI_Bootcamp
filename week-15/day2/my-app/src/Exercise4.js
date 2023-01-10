import './Exercise4.css';
import logo from './logo.svg';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
function Exercise4() {
  return (
    <div className='div'>
      <h1 style={style_header}>Hello</h1>
      <p className='para'>Paragraph</p>
      <a href='https://mayocodex.netlify.app/'>Link</a>
      <form>
        <input type={'text'}></input>
        <input type={'email'}></input>
        <button type={'submit'}>submit</button>
      </form>
      <ul>
        <li>ONE</li>
        <li>TWO</li>
        <li>ZERO</li>
      </ul>
      <img src={logo} className="App-logo" alt="logo" id='logo' />
    </div>
  );
}

export default Exercise4;
