import logo from './logo.svg';
import './App.css';
import SignInSide from './signinside';

function App()
{
  return (
    <div className="App">
      <div>
        {SignInSide()}
      </div>
    </div>
  );
}

export default App;