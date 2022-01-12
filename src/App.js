import './App.css';
import { Button} from 'reactstrap';
import Header from './Components/Header';
import Todo from './Components/Todo';

function App() {
  return (
    <>
      <div id='app-cover'>
        <Header />
        <Todo />
      </div>
    </>
  );
}

export default App;
