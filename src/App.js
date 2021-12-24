import Header from './Components/Header/Header';
import './App.css';
import Vlad from "./Components/Vlad/index";
import ItemsList from './Components/ItemsList/ItemsList';


function App() {
  return (
    <div className="App">

      <Header />
    <ItemsList />
    <footer>
      <Vlad/>
    </footer>
      
    </div>
  );
}

export default App;
