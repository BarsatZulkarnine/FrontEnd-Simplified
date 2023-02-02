import './App.css';
import Highlight from './components/Highlights';
import Landing from './components/Landing page';
import Nav from "./components/nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Highlight/>

    </div>
  );
}

export default App;
