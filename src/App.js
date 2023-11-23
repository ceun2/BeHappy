import './App.css';
import './components/Header';
import Diary from './components/Diary';
import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Header></Header>
      <div id="main">
        <Calendar></Calendar>
        <Diary></Diary>
      </div>
    </div>
  );
}

export default App;
