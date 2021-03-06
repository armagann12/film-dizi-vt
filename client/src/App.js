import { BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Card from './view/Card';
import Search from './view/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Card />
      </Router>
    </div>
  );
}

export default App;
